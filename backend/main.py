from contextlib import contextmanager
from datetime import datetime, timezone
import logging
import os
from pathlib import Path
from typing import Optional
import uuid

from fastapi import FastAPI, HTTPException, Request, status
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import google.auth
from google.auth.transport.requests import Request as GoogleAuthRequest
import httpx
from pydantic import BaseModel, Field

logger = logging.getLogger("demo-landing")
logging.basicConfig(level=logging.INFO)


def _load_local_dotenv() -> None:
    for env_path in (
        Path(__file__).resolve().parent.parent / ".env",
        Path(__file__).resolve().parent / ".env",
    ):
        if env_path.is_file():
            for raw_line in env_path.read_text(encoding="utf-8").splitlines():
                line = raw_line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                key, val = line.split("=", 1)
                os.environ.setdefault(key.strip(), val.strip().strip("'\""))


_load_local_dotenv()

PROJECT_ID = os.getenv("GCP_PROJECT_ID", "gtm-cloud-helpdesk")
REGION = os.getenv("GCP_REGION", "us-central1")
CLOUDSQL_CONNECTION_NAME = os.getenv(
    "CLOUDSQL_CONNECTION_NAME", "gtm-cloud-helpdesk:us-central1:qhub-db"
)
DB_USER = os.getenv("DB_USER", "qh_user")
DB_PASSWORD = os.getenv("DB_PASSWORD", "")
DB_NAME = os.getenv("DB_NAME", "demo_landing")
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    f"postgresql://{DB_USER}:{DB_PASSWORD}@/{DB_NAME}?host=/cloudsql/{CLOUDSQL_CONNECTION_NAME}",
)

GOOGLE_SHEET_ID = os.getenv(
    "GOOGLE_SHEET_ID", "1nIsz8_tsfObY9sO6_Xo0Q2o4F_o5QykS3jwpgF4kTMA"
)
GOOGLE_SHEET_TAB = os.getenv("GOOGLE_SHEET_TAB", "Feedback")
GOOGLE_SHEET_URL = f"https://docs.google.com/spreadsheets/d/{GOOGLE_SHEET_ID}/edit"

RATING_LABELS = {
    1: "Needs Improvement",
    2: "Fair",
    3: "Good",
    4: "Great",
    5: "Exceptional",
}

_sql_connector = None


def _get_sql_connector():
    global _sql_connector
    if _sql_connector is None:
        from google.cloud.sql.connector import Connector

        _sql_connector = Connector()
    return _sql_connector


@contextmanager
def get_db_connection():
    """Connect to Cloud SQL PostgreSQL via Unix socket on Cloud Run or Cloud SQL Connector with ADC."""
    unix_socket_dir = Path(f"/cloudsql/{CLOUDSQL_CONNECTION_NAME}")
    if unix_socket_dir.exists():
        import psycopg

        conn = psycopg.connect(DATABASE_URL, autocommit=True)
        try:
            yield conn
        finally:
            conn.close()
    else:
        connector = _get_sql_connector()
        conn = connector.connect(
            CLOUDSQL_CONNECTION_NAME,
            "pg8000",
            user=DB_USER,
            password=DB_PASSWORD,
            db=DB_NAME,
        )
        conn.autocommit = True
        try:
            yield conn
        finally:
            conn.close()


def init_db() -> None:
    """Ensure the showcase_feedback table exists in Cloud SQL."""
    create_table_sql = """
    CREATE TABLE IF NOT EXISTS showcase_feedback (
        id VARCHAR(64) PRIMARY KEY,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        rating_label VARCHAR(64) NOT NULL,
        topic VARCHAR(128) NOT NULL,
        page VARCHAR(64) NOT NULL,
        name_or_email VARCHAR(255) DEFAULT '',
        message TEXT NOT NULL,
        submitted_by VARCHAR(255) DEFAULT '',
        synced_to_sheet BOOLEAN DEFAULT FALSE,
        sheet_updated_range VARCHAR(128) DEFAULT '',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    """
    with get_db_connection() as conn:
        cur = conn.cursor()
        cur.execute(create_table_sql)
        cur.close()


def get_sheets_access_token() -> str:
    """Obtain an OAuth2 access token with Google Sheets & Drive scopes via ADC or Cloud Run SA."""
    scopes = [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
    ]
    credentials, _ = google.auth.default(scopes=scopes)
    if not credentials.valid:
        credentials.refresh(GoogleAuthRequest())
    if not credentials.token:
        raise RuntimeError("Failed to obtain access token from ADC / Service Account")
    return credentials.token


async def append_feedback_to_sheet(row_values: list) -> str:
    """Append a feedback row to the configured Google Sheet and return the updated range."""
    token = get_sheets_access_token()
    url = (
        f"https://sheets.googleapis.com/v4/spreadsheets/{GOOGLE_SHEET_ID}"
        f"/values/{GOOGLE_SHEET_TAB}!A:I:append"
    )
    params = {
        "valueInputOption": "USER_ENTERED",
        "insertDataOption": "INSERT_ROWS",
    }
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "x-goog-user-project": PROJECT_ID,
    }
    payload = {
        "majorDimension": "ROWS",
        "values": [row_values],
    }
    async with httpx.AsyncClient(timeout=15.0) as client:
        resp = await client.post(url, params=params, headers=headers, json=payload)
        if resp.status_code >= 400:
            logger.error(
                "Google Sheets append failed (%s): %s", resp.status_code, resp.text
            )
            raise RuntimeError(
                f"Google Sheets API error ({resp.status_code}): {resp.text}"
            )
        data = resp.json()
        return data.get("updates", {}).get("updatedRange", f"{GOOGLE_SHEET_TAB}!A:I")


class FeedbackCreateRequest(BaseModel):
    id: Optional[str] = None
    rating: int = Field(..., ge=1, le=5)
    topic: str = Field(default="Overall Showcase", max_length=128)
    nameOrEmail: str = Field(default="", max_length=255)
    message: str = Field(..., min_length=1, max_length=4000)
    page: str = Field(default="landing", max_length=64)


app = FastAPI(
    title="Google Cloud × Cognizant Executive Transformation Showcase",
    version="1.1.0",
)


@app.on_event("startup")
def on_startup():
    try:
        init_db()
        logger.info(
            "Initialized Cloud SQL table 'showcase_feedback' on %s (%s)",
            CLOUDSQL_CONNECTION_NAME,
            DB_NAME,
        )
    except Exception as exc:
        logger.warning("Startup DB initialization warning: %s", exc)


@app.get("/api/health")
async def health_check():
    return {
        "status": "ok",
        "service": "demo-landing",
        "project": PROJECT_ID,
        "cloudSqlInstance": CLOUDSQL_CONNECTION_NAME,
        "database": DB_NAME,
        "googleSheetId": GOOGLE_SHEET_ID,
        "googleSheetUrl": GOOGLE_SHEET_URL,
    }


def _extract_iap_user(request: Request) -> str:
    raw = request.headers.get("x-goog-authenticated-user-email", "")
    if ":" in raw:
        return raw.split(":", 1)[1]
    return raw or "anonymous"


@app.post("/api/feedback", status_code=status.HTTP_201_CREATED)
async def submit_feedback(payload: FeedbackCreateRequest, request: Request):
    init_db()

    feedback_id = (payload.id or "").strip() or f"fb-{int(datetime.now(timezone.utc).timestamp() * 1000)}-{uuid.uuid4().hex[:6]}"
    created_at = datetime.now(timezone.utc)
    created_at_iso = created_at.strftime("%Y-%m-%d %H:%M:%S UTC")
    rating_label = RATING_LABELS.get(payload.rating, "Good")
    topic = payload.topic.strip() or "Overall Showcase"
    page = payload.page.strip() or "landing"
    name_or_email = payload.nameOrEmail.strip()
    message = payload.message.strip()
    iap_user = _extract_iap_user(request)

    # 1. Insert into Cloud SQL PostgreSQL
    insert_sql = """
        INSERT INTO showcase_feedback (
            id, rating, rating_label, topic, page, name_or_email, message, submitted_by, synced_to_sheet, created_at
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (id) DO UPDATE SET
            rating = EXCLUDED.rating,
            rating_label = EXCLUDED.rating_label,
            topic = EXCLUDED.topic,
            page = EXCLUDED.page,
            name_or_email = EXCLUDED.name_or_email,
            message = EXCLUDED.message
    """
    with get_db_connection() as conn:
        cur = conn.cursor()
        cur.execute(
            insert_sql,
            (
                feedback_id,
                payload.rating,
                rating_label,
                topic,
                page,
                name_or_email,
                message,
                iap_user,
                False,
                created_at,
            ),
        )
        cur.close()

    # 2. Populate row in Google Sheet
    sheet_row = [
        feedback_id,
        created_at_iso,
        payload.rating,
        rating_label,
        topic,
        page,
        name_or_email or iap_user,
        message,
        iap_user,
    ]
    synced_to_sheet = False
    sheet_updated_range = ""
    sheet_error = None
    try:
        sheet_updated_range = await append_feedback_to_sheet(sheet_row)
        synced_to_sheet = True
        with get_db_connection() as conn:
            cur = conn.cursor()
            cur.execute(
                "UPDATE showcase_feedback SET synced_to_sheet = %s, sheet_updated_range = %s WHERE id = %s",
                (True, sheet_updated_range, feedback_id),
            )
            cur.close()
    except Exception as exc:
        logger.error("Failed to sync feedback %s to Google Sheet: %s", feedback_id, exc)
        sheet_error = str(exc)

    return {
        "id": feedback_id,
        "rating": payload.rating,
        "ratingLabel": rating_label,
        "topic": topic,
        "page": page,
        "nameOrEmail": name_or_email,
        "message": message,
        "submittedBy": iap_user,
        "createdAt": created_at.isoformat(),
        "storedInCloudSql": True,
        "syncedToSheet": synced_to_sheet,
        "sheetUpdatedRange": sheet_updated_range,
        "sheetUrl": GOOGLE_SHEET_URL,
        "sheetError": sheet_error,
    }


@app.get("/api/feedback")
async def list_feedback(limit: int = 50):
    init_db()
    safe_limit = max(1, min(limit, 200))
    with get_db_connection() as conn:
        cur = conn.cursor()
        cur.execute(
            """
            SELECT id, rating, rating_label, topic, page, name_or_email, message,
                   submitted_by, synced_to_sheet, sheet_updated_range, created_at
            FROM showcase_feedback
            ORDER BY created_at DESC
            LIMIT %s
            """,
            (safe_limit,),
        )
        rows = cur.fetchall()
        cur.execute("SELECT COUNT(*) FROM showcase_feedback")
        total_count = cur.fetchone()[0]
        cur.close()

    items = []
    for r in rows:
        created_val = r[10]
        created_iso = (
            created_val.isoformat()
            if hasattr(created_val, "isoformat")
            else str(created_val)
        )
        items.append(
            {
                "id": r[0],
                "rating": r[1],
                "ratingLabel": r[2],
                "topic": r[3],
                "page": r[4],
                "nameOrEmail": r[5],
                "message": r[6],
                "submittedBy": r[7],
                "syncedToSheet": bool(r[8]),
                "sheetUpdatedRange": r[9] or "",
                "createdAt": created_iso,
            }
        )

    return {
        "totalCount": total_count,
        "sheetId": GOOGLE_SHEET_ID,
        "sheetUrl": GOOGLE_SHEET_URL,
        "cloudSqlInstance": CLOUDSQL_CONNECTION_NAME,
        "database": DB_NAME,
        "items": items,
    }


@app.post("/api/feedback/sync-sheet")
async def sync_unsynced_feedback_to_sheet():
    """Sync any Cloud SQL feedback rows where synced_to_sheet is FALSE into the Google Sheet."""
    init_db()
    with get_db_connection() as conn:
        cur = conn.cursor()
        cur.execute(
            """
            SELECT id, rating, rating_label, topic, page, name_or_email, message, submitted_by, created_at
            FROM showcase_feedback
            WHERE synced_to_sheet = FALSE
            ORDER BY created_at ASC
            """
        )
        unsynced = cur.fetchall()
        cur.close()

    synced_ids = []
    errors = []
    for r in unsynced:
        fb_id, rating, rating_label, topic, page, name_or_email, message, submitted_by, created_at = r
        created_str = (
            created_at.strftime("%Y-%m-%d %H:%M:%S UTC")
            if hasattr(created_at, "strftime")
            else str(created_at)
        )
        row_values = [
            fb_id,
            created_str,
            rating,
            rating_label,
            topic,
            page,
            name_or_email or submitted_by,
            message,
            submitted_by,
        ]
        try:
            updated_range = await append_feedback_to_sheet(row_values)
            with get_db_connection() as conn:
                cur = conn.cursor()
                cur.execute(
                    "UPDATE showcase_feedback SET synced_to_sheet = %s, sheet_updated_range = %s WHERE id = %s",
                    (True, updated_range, fb_id),
                )
                cur.close()
            synced_ids.append(fb_id)
        except Exception as exc:
            errors.append({"id": fb_id, "error": str(exc)})

    return {
        "syncedCount": len(synced_ids),
        "syncedIds": synced_ids,
        "errors": errors,
        "sheetUrl": GOOGLE_SHEET_URL,
    }


static_dir = Path("/app/static")
if not static_dir.exists():
    local_dist = Path(__file__).resolve().parent.parent / "frontend" / "dist"
    if local_dist.exists():
        static_dir = local_dist

if static_dir.exists():
    assets_dir = static_dir / "assets"
    if assets_dir.exists():
        app.mount("/assets", StaticFiles(directory=str(assets_dir)), name="assets")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        if full_path.startswith("_apigateway/") or full_path == "_warmup":
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="Not found"
            )
        if full_path == "favicon.ico" and (static_dir / "favicon.svg").is_file():
            return FileResponse(
                str(static_dir / "favicon.svg"), media_type="image/svg+xml"
            )
        candidate = (static_dir / full_path).resolve()
        if candidate.is_file() and str(candidate).startswith(
            str(static_dir.resolve())
        ):
            return FileResponse(str(candidate))
        return FileResponse(str(static_dir / "index.html"))

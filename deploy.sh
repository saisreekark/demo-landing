#!/usr/bin/env bash
set -euo pipefail

export CLOUDSDK_METRICS_ENVIRONMENT="${CLOUDSDK_METRICS_ENVIRONMENT:+$CLOUDSDK_METRICS_ENVIRONMENT }datacloud.antigravity"

# ── Configuration ──────────────────────────────────────────────────────────────
PROJECT_ID="${PROJECT_ID:-gtm-cloud-helpdesk}"
PROJECT_NUMBER="${PROJECT_NUMBER:-653428233292}"
REGION="${REGION:-us-central1}"
REPO_NAME="${REPO_NAME:-demo-landing-repo}"
REPO="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}"

SERVICE="${SERVICE:-demo-landing-classic}"
IMAGE="${REPO}/${SERVICE}:latest"

# Runtime service account on gtm-cloud-helpdesk
RUNTIME_SA="${RUNTIME_SA:-${PROJECT_NUMBER}-compute@developer.gserviceaccount.com}"
IAP_SA="service-${PROJECT_NUMBER}@gcp-sa-iap.iam.gserviceaccount.com"

# Cloud SQL & Google Sheets configuration
CLOUDSQL_INSTANCE="${CLOUDSQL_INSTANCE:-gtm-cloud-helpdesk:us-central1:qhub-db}"
DB_NAME="${DB_NAME:-demo_landing}"
DB_USER="${DB_USER:-qh_user}"
DB_PASSWORD="${DB_PASSWORD:?DB_PASSWORD environment variable must be set}"
GOOGLE_SHEET_ID="${GOOGLE_SHEET_ID:-1nIsz8_tsfObY9sO6_Xo0Q2o4F_o5QykS3jwpgF4kTMA}"
GOOGLE_SHEET_TAB="${GOOGLE_SHEET_TAB:-Feedback}"

echo "==> [1/4] Ensuring Artifact Registry repository '${REPO_NAME}' exists in ${REGION}..."
if ! gcloud artifacts repositories describe "${REPO_NAME}" --location="${REGION}" --project="${PROJECT_ID}" >/dev/null 2>&1; then
  gcloud artifacts repositories create "${REPO_NAME}" \
    --repository-format=docker \
    --location="${REGION}" \
    --description="Docker repository for demo-landing (Google Cloud x Cognizant Executive Showcase)" \
    --project="${PROJECT_ID}"
fi

echo "==> [2/4] Building container image via Cloud Build: ${IMAGE}"
gcloud builds submit \
  --tag "${IMAGE}" \
  --project "${PROJECT_ID}"

echo "==> [3/4] Deploying Cloud Run service '${SERVICE}' in ${REGION}..."
gcloud run deploy "${SERVICE}" \
  --image "${IMAGE}" \
  --region "${REGION}" \
  --platform managed \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --timeout 60 \
  --no-allow-unauthenticated \
  --service-account "${RUNTIME_SA}" \
  --add-cloudsql-instances "${CLOUDSQL_INSTANCE}" \
  --set-env-vars "GCP_PROJECT_ID=${PROJECT_ID},GCP_REGION=${REGION},CLOUDSQL_CONNECTION_NAME=${CLOUDSQL_INSTANCE},DB_NAME=${DB_NAME},DB_USER=${DB_USER},DB_PASSWORD=${DB_PASSWORD},GOOGLE_SHEET_ID=${GOOGLE_SHEET_ID},GOOGLE_SHEET_TAB=${GOOGLE_SHEET_TAB}" \
  --startup-probe "httpGet.path=/api/health,httpGet.port=8080,initialDelaySeconds=2,periodSeconds=5,failureThreshold=6,timeoutSeconds=3" \
  --liveness-probe "httpGet.path=/api/health,httpGet.port=8080,initialDelaySeconds=10,periodSeconds=30,failureThreshold=3,timeoutSeconds=5" \
  --project "${PROJECT_ID}"

echo "==> [4/4] Enabling Cloud Run Direct IAP and granting IAM bindings..."
gcloud beta run services update "${SERVICE}" \
  --iap \
  --region "${REGION}" \
  --project "${PROJECT_ID}"

# Ensure IAP service agent has roles/run.invoker on the Cloud Run service
gcloud run services add-iam-policy-binding "${SERVICE}" \
  --region="${REGION}" \
  --member="serviceAccount:${IAP_SA}" \
  --role="roles/run.invoker" \
  --project="${PROJECT_ID}"

# Grant IAP Web Resource access to domain:google.com and user:saisreekark@google.com
for MEMBER in "domain:google.com" "user:saisreekark@google.com"; do
  gcloud iap web add-iam-policy-binding \
    --resource-type=cloud-run \
    --service="${SERVICE}" \
    --region="${REGION}" \
    --member="${MEMBER}" \
    --role="roles/iap.httpsResourceAccessor" \
    --project="${PROJECT_ID}"
done

SERVICE_URL="$(gcloud run services describe "${SERVICE}" --region "${REGION}" --project "${PROJECT_ID}" --format='value(status.url)')"
echo ""
echo "================================================================================"
echo "Deployment Complete!"
echo "Service:     ${SERVICE}"
echo "Project:     ${PROJECT_ID} (${REGION})"
echo "Service URL: ${SERVICE_URL}"
echo "Health URL:  ${SERVICE_URL}/api/health"
echo "================================================================================"

# Stage 1: Build React SPA
FROM node:22-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: FastAPI + Uvicorn serving /api/health and /app/static
FROM python:3.12-slim
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/
WORKDIR /app

# Create non-root user
RUN useradd -m -u 1000 appuser

# Install Python dependencies
COPY backend/pyproject.toml backend/uv.lock ./
RUN uv sync --frozen --no-dev --no-install-project

# Copy backend code
COPY backend/ ./

# Copy built React SPA into /app/static
COPY --from=frontend-builder /app/frontend/dist /app/static

RUN chown -R appuser:appuser /app
USER appuser

EXPOSE 8080
CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]

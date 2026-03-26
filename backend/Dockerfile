ARG PYTHON_VERSION=3.11-slim
ARG APP_PORT=8000

FROM python:${PYTHON_VERSION}
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE ${APP_PORT}
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "${APP_PORT}"]
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:8000/health || exit 1
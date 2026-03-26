# ☸️ local_vm

> Kubernetes 프로젝트 — Docker Generator로 자동 생성됨

## 서비스 구성

- **⚛️ React** (react) — port: 80:80
- **⚡ Python FastAPI** (python-fastapi) — port: 8000:8000

## 빠른 시작 (Kubernetes)

```bash
# 1. 이미지 빌드 & 레지스트리 Push
docker build -t your-registry/service-name:latest ./service-dir
docker push your-registry/service-name:latest

# 2. Secret 값 수정
vi k8s/service-name/secret.yaml

# 3. 전체 배포 (kustomize)
kubectl apply -k k8s/

# 4. 배포 상태 확인
kubectl get all -n default
```

## 디렉토리 구조

```
local_vm/
├── frontend/
│   └── Dockerfile
├── backend/
│   └── Dockerfile
├── k8s/
│   ├── kustomization.yaml
│   ├── ingress.yaml
│   └── {service}/
│       ├── deployment.yaml
│       ├── service.yaml
│       ├── configmap.yaml
│       └── secret.yaml
└── README.md
```

---
*Generated with Docker Generator*

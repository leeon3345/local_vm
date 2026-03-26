ARG NODE_VERSION=18-alpine
ARG APP_PORT=80

FROM node:${NODE_VERSION} AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE ${APP_PORT}
CMD ["nginx", "-g", "daemon off;"]
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q --spider http://localhost:80 || exit 1
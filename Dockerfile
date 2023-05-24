FROM --platform=linux/amd64 node:20.2.0-alpine3.17 AS builder
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install -g npm@9.6.7 && \
    rm -f package-lock.json && \
    npm install && \
    npm run build
FROM --platform=linux/amd64 nginx:1.24.0-alpine3.17
COPY --from=builder /app/build /usr/share/nginx/html
# COPY certificate.pem /etc/nginx/certs/
# COPY key.pem /etc/nginx/certs/
# COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
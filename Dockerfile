# ── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:24.15.0 AS builder

WORKDIR /app

# Install dependencies first (for caching)
COPY package*.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./
RUN npm ci

# Copy source and generate Prisma client
COPY . .
RUN npx prisma generate

# Build the application
RUN npm run build

# ── Stage 2: Production ──────────────────────────────────────────────────────
FROM node:24.15.0-alpine

# Install OpenSSL (required for Prisma's query engine on Alpine)
RUN apk add --no-cache openssl

WORKDIR /app

# Copy package manifests and install production deps only
COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled output from builder
COPY --from=builder /app/dist ./dist

# Copy the Prisma-generated client (binary engine + types)
COPY --from=builder /app/src/generated/prisma ./dist/src/generated/prisma

# Copy the schema and configs so `prisma migrate deploy` can run at container start
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/src/views ./dist/views

# Environment variables will be provided via docker-compose or .env
EXPOSE 3000

# Run migrations then start the app
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/src/main.js"]

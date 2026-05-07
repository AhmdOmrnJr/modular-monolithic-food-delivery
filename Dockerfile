# ── Stage 1: Base ────────────────────────────────────────────────────────────
FROM node:24.15.0-alpine AS base

# Install OpenSSL (required for Prisma's query engine on Alpine)
RUN apk add --no-cache openssl

WORKDIR /app

# ── Stage 2: Development ──────────────────────────────────────────────────────
FROM base AS development

# Copy package manifests
COPY package*.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./

# Install ALL dependencies (including devDependencies)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

EXPOSE 3000

# Start development server with file watch
CMD ["sh", "/app/docker-entrypoint.dev.sh"]

# ── Stage 3: Builder (Production Build) ───────────────────────────────────────
FROM base AS builder

COPY package*.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./

# Install ALL dependencies to be able to compile the typescript project
RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build

# ── Stage 4: Production (Final Image) ─────────────────────────────────────────
FROM base AS production

COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled output and generated prisma client from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/generated/prisma ./dist/src/generated/prisma
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/src/views ./dist/views

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/src/main.js"]

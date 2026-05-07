#!/bin/sh
set -e

echo "🚀 Running Prisma migrations..."
npx prisma migrate deploy

echo "🔗 Linking generated Prisma client into dist..."
mkdir -p /app/dist/src/generated
ln -sf /app/src/generated/prisma /app/dist/src/generated/prisma

echo "👀 Starting NestJS in watch mode..."
npm run start:dev

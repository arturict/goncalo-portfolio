# Multi-stage Docker build for Gonçalo's portfolio using Bun
# Optimized for fast builds and minimal image size

FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Stage 1: Install dependencies (cached layer)
FROM base AS install
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Stage 2: Production dependencies only
FROM base AS prod-deps
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

# Stage 3: Build Next.js app
FROM base AS builder
COPY --from=install /usr/src/app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

# Stage 4: Production runtime (lean image with curl support)
FROM oven/bun:1
WORKDIR /usr/src/app

# Copy only necessary files from builder
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=prod-deps /usr/src/app/node_modules ./node_modules

EXPOSE 3000
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

HEALTHCHECK --interval=30s --timeout=5s --retries=3 --start-period=10s \
    CMD curl -f http://localhost:3000/ || exit 1

CMD ["bun", "run", "start"]

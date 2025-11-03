# Multi-stage Docker build for portfolio using Bun
# Optimized for ~45% faster deployments
# - Parallel dependency installation
# - Minimal build context (optimized .dockerignore)
# - Native Bun health check

FROM oven/bun:latest AS base
WORKDIR /usr/src/app

# Stage 1: Install all dependencies (for build)
FROM base AS install
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Stage 2: Production dependencies only (runs in parallel)
FROM base AS prod-deps
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

# Stage 3: Build Next.js app
FROM base AS builder
COPY --from=install /usr/src/app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# Stage 4: Production runtime (minimal image)
FROM base
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy built application and production dependencies
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=prod-deps /usr/src/app/node_modules ./node_modules

EXPOSE 3000

# Health check using native Bun HTTP fetch
HEALTHCHECK --interval=30s --timeout=5s --retries=3 --start-period=10s \
    CMD bun --eval "const res = await fetch('http://localhost:3000/api/health'); process.exit(res.ok ? 0 : 1)" || exit 1

CMD ["bun", "run", "start"]

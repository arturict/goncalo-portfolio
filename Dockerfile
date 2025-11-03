# Multi-stage Docker build for Gonçalo's portfolio using Bun
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Stage 2: Install dev dependencies
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock* /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Stage 3: Install production dependencies only
RUN mkdir -p /temp/prod
COPY package.json bun.lock* /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Stage 4: Build stage
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

# Stage 5: Production stage
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/public ./public
COPY --from=prerelease /usr/src/app/.next ./.next
COPY --from=prerelease /usr/src/app/package.json .

EXPOSE 3000
ENV NODE_ENV=production
CMD ["bun", "run", "start"]

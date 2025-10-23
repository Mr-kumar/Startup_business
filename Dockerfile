FROM node:20-alpine AS deps
WORKDIR /app

# Ensure a consistent, clean install using package-lock.json
COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force


# --- Builder layer ---
FROM node:20-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

# Install dependencies (copied from deps stage for reproducible builds)
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json ./

# Copy the rest of the application source
COPY . .

# Build the Next.js app with standalone output
RUN npm run build


# --- Runner layer ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000

# Create non-root user for security
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy the standalone server and required assets from the builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN mkdir -p /app/.next/cache \
    && chown -R nextjs:nextjs /app/.next

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]

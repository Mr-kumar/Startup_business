FROM node:20-alpine AS deps
WORKDIR /app

# Ensure a consistent, clean install using package-lock.json
COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force


# --- Builder layer ---
FROM node:20-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    SMTP_HOST=smtp.gmail.com \
    SMTP_PORT=465 \
    SMTP_USER=office.dostartup@gmail.com \
    SMTP_PASSWORD=ukbuiqwcrwqnjazz \
    ADMIN_EMAIL=office.dostartup@gmail.com \
    OWNER_CALENDAR_ID=primary \
    TIMEZONE=Asia/Kolkata \
    GOOGLE_CLIENT_ID=1063627471241-dbv2op4bgh1p4csmp6edsmqlhb4iccch.apps.googleusercontent.com \
    GOOGLE_CLIENT_SECRET=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 \
    GOOGLE_REFRESH_TOKEN=1//04gQai8z-jiI2CgYIARAAGAQSNgF-L9IrBP0vMvAwpwkwK6OGTi2G5WcwQYDG60BPiRx2xf1Fd3u-0p5T--yUVbo5_i1s8WD9eg

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
    PORT=3000 \
    SMTP_HOST=smtp.gmail.com \
    SMTP_PORT=465 \
    SMTP_USER=office.dostartup@gmail.com \
    SMTP_PASSWORD=ukbuiqwcrwqnjazz \
    ADMIN_EMAIL=office.dostartup@gmail.com \
    OWNER_CALENDAR_ID=primary \
    TIMEZONE=Asia/Kolkata \
    GOOGLE_CLIENT_ID=1063627471241-dbv2op4bgh1p4csmp6edsmqlhb4iccch.apps.googleusercontent.com \
    GOOGLE_CLIENT_SECRET=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 \
    GOOGLE_REFRESH_TOKEN=1//04gQai8z-jiI2CgYIARAAGAQSNgF-L9IrBP0vMvAwpwkwK6OGTi2G5WcwQYDG60BPiRx2xf1Fd3u-0p5T--yUVbo5_i1s8WD9eg

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

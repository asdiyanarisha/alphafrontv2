# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
# Install dependencies with legacy-peer-deps flag to handle React RC version
RUN npm install --legacy-peer-deps

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy all files
COPY . .

# Build application
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

# Set to production environment
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder stage
COPY --from=builder /app/public ./public
# Copy the static folder
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy the entire .next folder
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# Copy node_modules
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
# Copy the package.json
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Set proper permissions
USER nextjs

# Expose port
EXPOSE 3000

# Set environment variable for the host
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Command to run the application
CMD ["npm", "start"]

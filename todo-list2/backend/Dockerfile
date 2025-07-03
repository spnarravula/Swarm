# ========================
# Stage 1: Build dependencies
# ========================
FROM node:18 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application source code
COPY . .

# ========================
# Stage 2: Production image
# ========================
FROM node:18-slim

WORKDIR /app

# Copy only the built app and node_modules from build stage
COPY --from=build /app /app

EXPOSE 3000

CMD ["node", "app.js"]

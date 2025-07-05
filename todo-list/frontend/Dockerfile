# Stage 1: Build the application
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

# Stage 2: Create the final image
FROM node:18-slim

WORKDIR /app

COPY --from=build /app .

EXPOSE 8080

CMD ["node", "app.js"]

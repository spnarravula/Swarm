FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

FROM node:18-slim

WORKDIR /app

COPY --from=build /app .

EXPOSE 8080

CMD ["node", "app.js"]

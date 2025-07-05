FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

FROM node:18-slim

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node", "app.js"]

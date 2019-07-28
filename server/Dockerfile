# Build application
FROM node:12-alpine AS build-env
WORKDIR /app

COPY . ./
RUN npm install --production

RUN npm run build

# Build docker image
FROM node:12-alpine
WORKDIR /app

COPY --from=build-env /app/dist ./

ENTRYPOINT ["node", "main.js"]
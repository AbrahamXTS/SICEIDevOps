FROM node:20.11.1-alpine

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 8085

ENTRYPOINT ["node", "/app/dist/index.js"]
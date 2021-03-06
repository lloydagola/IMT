FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /usr/src/app/client

RUN npm install && npm run build

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["node", "index.js"]


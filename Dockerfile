FROM node:20-alpine3.17 as builder 

WORKDIR /app

COPY package*.json .

RUN npm i 

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
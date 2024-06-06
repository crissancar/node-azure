FROM node:20.11.1-alpine

WORKDIR /code

COPY package.json ./

RUN npm install

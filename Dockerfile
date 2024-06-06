FROM node:20.11.1-alpine

WORKDIR /code

COPY ./ /code

RUN npm install

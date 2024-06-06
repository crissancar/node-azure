FROM node:20.11.1-alpine

WORKDIR /code

COPY . ./

RUN npm install

RUN npm run build

CMD npm run start

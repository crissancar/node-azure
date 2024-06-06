FROM node:20.11.1-alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm install

EXPOSE 80

CMD npm run start

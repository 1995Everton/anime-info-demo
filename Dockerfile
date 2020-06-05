FROM node:alpine

RUN apk add python make g++

RUN apk add --no-cache yarn

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "dev" ]




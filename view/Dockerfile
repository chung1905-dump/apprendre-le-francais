FROM node:11

RUN mkdir -p /usr/src

WORKDIR /usr/src

RUN npm install -g create-react-app

RUN npm install -g react-script

RUN npx create-react-app app

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]

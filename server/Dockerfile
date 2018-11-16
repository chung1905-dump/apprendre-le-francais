FROM node:11

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install -g nodemon
RUN npm install

ARG USER_NAME
ARG UID

RUN useradd -M -U ${USER_NAME} -u ${UID} -p1 -d /usr/src/app -s /bin/bash -G root -o

ENV APACHE_RUN_USER ${USER_NAME}
ENV APACHE_RUN_GROUP ${USER_NAME}

USER ${USER_NAME}

CMD [ "npm", "start" ]

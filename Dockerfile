FROM node:14.17.1 as build

MAINTAINER "Divya Phani Tejaswi <divya.phani@vapprtech.com>"

WORKDIR /tracking_ws

COPY package.json /tracking_ws

COPY package-lock.json /tracking_ws

RUN apt update && apt install -y curl && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y gnupg

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt update && apt install -y yarn

RUN apt install --no-install-recommends yarn

RUN yarn --version

COPY . /tracking_ws

RUN yarn install

EXPOSE 3000

CMD yarn start && tail -f /dev/null

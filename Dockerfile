FROM node:14.17.1 as build
MAINTAINER "Divya Phani Tejaswi <divya.phani@vapprtech.com>"

RUN apt update && apt install -y wget && rm -rf /var/lib/apt/lists/*
RUN cd /tmp && apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /tracking_ws

COPY package.json /tracking_ws
COPY package-lock.json /tracking_ws

RUN pwd
RUN ls


RUN yarn install
#COPY yarn.lock ./
COPY . /tracking_ws
RUN yarn run build


EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["start"]



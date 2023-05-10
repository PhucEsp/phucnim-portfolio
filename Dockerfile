FROM --platform=linux/amd64 node:18.14.2-alpine

RUN apk update && apk add bash

WORKDIR /app

ADD . /app

RUN yarn

CMD [ "sh -c", "yarn && yarn dev" ]
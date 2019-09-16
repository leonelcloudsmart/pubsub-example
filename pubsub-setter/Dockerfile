FROM node:10.16.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install

ADD ./setup.sh /setup.sh
CMD ["/setup.sh"]

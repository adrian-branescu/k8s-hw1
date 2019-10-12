FROM node:10.16

WORKDIR /usr/src/hello-app
COPY . .
RUN npm install

EXPOSE 9000
ENV APP_MESSAGE Mars
ENV APP_PORT 9000

CMD ["node", "."]

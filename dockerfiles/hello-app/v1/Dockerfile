FROM node:10.16

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 9000
ENV APP_MESSAGE World
ENV APP_PORT 9000

CMD ["node", "."]

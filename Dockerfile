FROM node:latest
WORKDIR /app
COPY package.json ./app
RUN yarn install && yarn add nodemon --dev
COPY . /app
CMD node app.js
EXPOSE 8082
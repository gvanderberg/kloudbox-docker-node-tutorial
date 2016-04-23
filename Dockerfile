FROM node:latest

COPY . /app
WORKDIR /app

EXPOSE 80
EXPOSE 5858

RUN npm install

CMD ["node", "--debug=5858", "bin/www/index.js"]
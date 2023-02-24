FROM node:alpine

WORKDIR /home/app

COPY package*.json ./
RUN npm install
COPY . .

CMD ["yarn", "dev"]
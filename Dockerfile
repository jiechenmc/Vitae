FROM node

WORKDIR /jiechen.dev
COPY package.json ./
RUN npm install

COPY . .

CMD [ "npm", "run", "dev", "--", "--host" ]

EXPOSE 3000
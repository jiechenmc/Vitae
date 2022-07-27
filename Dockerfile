FROM node

WORKDIR /jiechen.dev

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn", "run", "dev", "--", "--host"]

EXPOSE 3000
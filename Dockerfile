# build environment
FROM node:20 as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn 
COPY . ./

RUN yarn build
EXPOSE 4173

CMD ["yarn", "preview", "--host", "0.0.0.0"]
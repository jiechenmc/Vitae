FROM node:20-alpine AS builder
# ENV NODE_ENV production

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install 

COPY . .
RUN yarn build

FROM nginx:stable-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
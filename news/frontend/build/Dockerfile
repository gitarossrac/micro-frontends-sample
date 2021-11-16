FROM node AS build

WORKDIR /app

ENV NODE_OPTIONS --openssl-legacy-provider

COPY . .

RUN npm install

RUN npm run bundle

####
FROM nginx

COPY ./build/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build /app/dist/* /usr/share/nginx/html

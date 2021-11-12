FROM node AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

####
FROM nginx

COPY ./build/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build /app/dist/* /usr/share/nginx/html

### STAGE 1: Build ###
FROM node:14-alpine as build

ENV GOOGLE_ANALYTICS_ID "$GOOGLE_ANALYTICS_ID"

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN apk update && apk upgrade

COPY . /usr/src/nuxt-app
RUN npm install --silent

RUN npm run generate

### STAGE 2: NGINX ###
FROM nginx:stable-alpine

COPY --from=build /usr/src/nuxt-app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
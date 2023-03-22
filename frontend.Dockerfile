FROM node:latest as build-stage
WORKDIR /opt
COPY ./frontend/bi-app/. .
RUN npm i
RUN npm run build

FROM nginx:alpine as production-stage
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /opt/dist/ /usr/share/nginx/html/
EXPOSE 4173
CMD ["nginx", "-g", "daemon off;" ]
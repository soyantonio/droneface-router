FROM node:14-stretch-slim
LABEL maintainer="00antonio.perez00@gmail.com"

WORKDIR /usr/app

COPY . .
RUN chmod +x /usr/app/scripts/start.sh
RUN yarn

EXPOSE ${APP_PORT}
ENTRYPOINT [ "./scripts/start.sh" ]

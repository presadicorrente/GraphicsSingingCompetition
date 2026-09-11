FROM node:22-bookworm-slim
LABEL maintainer="PXL Services"

EXPOSE 4200

WORKDIR /app
COPY . /app

RUN npm install -g @angular/cli 
RUN npm install

CMD ng serve --host 0.0.0.0
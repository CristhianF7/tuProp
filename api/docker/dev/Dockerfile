FROM node:latest
RUN mkdir /src
WORKDIR /src
COPY . /src/
RUN npm install
RUN npm install -g nodemon
EXPOSE 4001
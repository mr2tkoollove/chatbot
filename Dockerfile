FROM node:7.0.0

MAINTAINER ThaiNT <thaint@dkt.com.vn>

# Create app directory
RUN mkdir -p /messenger-app/src/app
WORKDIR /messenger-app/src/app

# Install NPM
COPY package.json /messenger-app/src/app/
RUN npm install

#Install dist folder
RUN ng build

# Bundle app source
COPY . /messenger-app/src/app

# Install and run Bower
RUN npm install -g bower
RUN bower install

EXPOSE 3001

CMD ["npm","start"]

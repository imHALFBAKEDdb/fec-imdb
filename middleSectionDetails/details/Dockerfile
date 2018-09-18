# what node version to use
FROM node:latest

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/app/

RUN npm install --production
# If you are building your code for production
# RUN npm install --only=production
RUN npm run build:prod

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
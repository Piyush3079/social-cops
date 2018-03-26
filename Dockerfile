FROM node:6.11.4

# Create app directory
WORKDIR /social-cops

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /social-cops

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /application

CMD [ "npm", "start" ]

EXPOSE 3000
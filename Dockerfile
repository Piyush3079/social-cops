FROM node:6.11.4

# Create app directory
WORKDIR /social-cops

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /social-cops
COPY lib /social-cops/lib
COPY public /social-cops/public
COPY views /social-cops/views

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /application

CMD [ "yarn", "prod:start" ]

EXPOSE 3000
## Social Cops
[![Build Status](https://img.shields.io/travis/Piyush3079/social-cops.svg?style=rounded-square)](https://travis-ci.org/Piyush3079/social-cops) [![codecov](https://codecov.io/gh/Piyush3079/social-cops/branch/master/graph/badge.svg)](https://codecov.io/gh/Piyush3079/social-cops)

### Technical Requirements
- Node version: greater than 6.
- npm version: greater than 3.
- yarn version: greater than 1.3.
- Mysql Databse for session storage.
    
#### Below are the steps to run the project into your local machine:

  - Clone the repository: `git clone https://github.com/Piyush3079/social-cops.git`
  - Go to the project: `cd social-cops`
  - Fill the enviroment variables for session, cookies, jwt token and database.
  - Run `yarn` or `npm install`
  - Starting the project on port 3000: `npm start` or `yarn start`
  - Running tests `yarn test` or `npm run test` to un tests for lint and code coverage.
  - Creating production build: `yarn prod:build` or `npm run prod:build`.
  - Running poduction build on port 3000: `yarn prod:start` or `npm run prod:start`.

#### Enviroment variables

  - `PASSWORD=` password you want to use for authenticating the user.
  - Default username is piyushvijay.1997@gmail.com
  - `JWT_SECRET=` secret used for signing jwt token.
  - `COOKIE_NAME=` name of the cookie for storing session.
  - `COOKIE_SECRET=` secret for securing cookie.
  - `DB_HOST=` host name of the database.
  - `DB_USER=` username used for the database.
  - `DB_PASSWORD=` password of your mysql database.
  - `DB_NAME=` name of the database to be used.

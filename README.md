## Social Cops
[![Build Status](https://img.shields.io/travis/Piyush3079/social-cops.svg?style=rounded-square)](https://travis-ci.org/Piyush3079/social-cops) [![codecov](https://codecov.io/gh/Piyush3079/social-cops/branch/master/graph/badge.svg)](https://codecov.io/gh/Piyush3079/social-cops)

### Technical Requirements
- Node version: greater than 6.
- npm version: greater than 3.
- yarn version: greater than 1.3.
    
#### Below are the steps to run the project into your local machine:

  - Clone the repository: `git clone https://github.com/Piyush3079/social-cops.git`
  - Go to the project: `cd social-cops`
  - Run `yarn` or `npm install`
  - Starting the project on port 3000: `npm start` or `yarn start`
  - Running tests `yarn test` or `npm run test` to run tests for lint and code coverage.
  - Creating production build: `yarn prod:build` or `npm run prod:build`.
  - Running poduction build on port 3000: `yarn prod:start` or `npm run prod:start`.
 
#### Docker image
  - Image is uploaded on docker hub: https://hub.docker.com/r/piyush3079/social-cops/
  - Use `docker pull piyush3079/social-cops` to pull the docker image.
  - run `docker run -p 8080:3000 piyush3079/application` to run the docker image on port 8080 of your localhost.
  - run `docker stop <CONTAINER_ID>` to stop the running container.

#### Project Routes
  - `/get_token` a post request to get authentication token for authenticating future requests.
  - `/download_file` a post request to send the url of the image and get the base64 string of the image in response.
  - `/add_patch` a patch request to send the initial object and a patch object to applt patches on the initial object.

#### Paramaters specifications
  - For Token: username is `piyushvijay.1997@gmail.com` and password id `random-password`.
  - For image download: The url should have the name of the image in the end, eg, `https://www.moda-cani.it/gallery/big/2957.jpg`.
  - For patchinf the object: The request should have 'Content-Type' as 'application/json' for sending the json data in the request. The data should have two objects.
  First object is the the object on which the patch is to be applied and second object contains what patch operations are to be applied and on what element of the object.
  A sample object is placed in the sample.json file for reference.

#### Github Handle
  - Repository url: `https://github.com/Piyush3079/social-cops`.
  - Raising issues: `https://github.com/Piyush3079/social-cops/issues`.
  - Making pull requests: `https://github.com/Piyush3079/social-cops/pulls`.
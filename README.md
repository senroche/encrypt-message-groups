# encrypted-message-groups - CSU34031 Project

## Overview
The aim of this project was to create a social network application that only shows messages from users within one of your trusted
groups. Other users posts simply appear as cipher text. 

This application is dockerized and utilizes the full MERN stack. Posts are encrypted on creation using AES and all encryption and decryption 
happens on the server. A secret key is randomly generated for each group on creation. This key is maintained within the database, 
accessible only to verified group members. I also added some basic auth using bcypt to hash and salt before storing.

The frontend is lacking in some features that are supported on the backend but overall the system works well.

## Video of application working
![](demo.gif)




## Main Technologies:
- [React](https://reactjs.org/) 
- [Node.js](https://nodejs.org/en/)
- [Express](https://mongoosejs.com/)
- [MongoDB](https://mongoosejs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Docker](https://www.docker.com)
- [cyrpto-js](https://www.npmjs.com/package/crypto-js) for AES encryption on post creation, decryption for verified members
- [bcyrpt-js](https://www.npmjs.com/package/bcryptjs) for storing user passwords as hashes with salt

## Screenshot of main screen
![](demo.gif)



### Build 
docker-compose build

### Run containers 
docker-compose up
# encrypted-message-groups - CSU34031 Project

The aim of this project is to create a social network application that only shows messages from users within one of your trusted
groups. Other users posts simply appear as cipher text. 

The app is dockerized and utilizes the MERN stack. All encryption and decryption happens on the express server. Posts are encrypted on 
creation using AES and are decrypted by a secret key maintained in the database, accessible to verified group members. I also added 
some basic auth using bcypt to hash and salt before storing.

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



### Build 
docker-compose build

### Run containers 
docker-compose up
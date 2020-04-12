const express = require('express')
const cors = require('cors')
require('dotenv').config()
var router = express.Router();
var user_controller = require("./routes/userAPI");
var post_controller = require("./routes/postAPI");
var testAPIRouter = require("./routes/tests/testAPI");
var testDBRouter = require("./routes/tests/testDB");


const app = express()
const mongoose = require('mongoose');
mongoose.connect("mongodb://user:password@db:27017/db", { useNewUrlParser: true });


app.use(cors());
app.use(express.json());
app.use(require("body-parser").json())

app.get('/', (req, res) => {
    res.status(200).send("Hey");
});


// Test Routes - Server and DB
router.use('/test', testAPIRouter);
router.use("/testDB", testDBRouter);


// User login/register routes using bcrypt
router.post('/user', user_controller.addUser);
router.get('/user', user_controller.login);

// Posts
router.get('/user', user_controller.login);
router.get('/user', user_controller.login);

// Posts
router.post('/post', post_controller.newPost);
router.get('/post', post_controller.getPosts);

app.use('/api', router);
// Route not found
app.use(function (req, res, next) {
    res.status(404).send('Not found');
});

app.listen(process.env.SERVER_PORT, () => console.log('Server started on ' + process.env.SERVER_PORT));

exports.app = app;

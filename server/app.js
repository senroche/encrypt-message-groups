const express = require('express')
const cors = require('cors')
require('dotenv').config()
var router = express.Router();
var user_controller = require("./routes/userAPI");
var post_controller = require("./routes/postAPI");
var group_controller = require("./routes/groupAPI");
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


// Login
router.get('/user/:username/:password', user_controller.login);
// Get user
router.get('/user/:username/', user_controller.returnUser);
// Get users
router.post('/user/', user_controller.addUser);


// Get Posts 
router.get('/post', post_controller.getPosts);
// Get Posts for group (post/group_name)
router.get('/post/:username', post_controller.getPosts);
// New Post (group, author, content)
router.post('/post', post_controller.newPost);


// Get groups
router.get('/group', group_controller.getGroups);
// Get group by name
router.get('/group/:name', group_controller.getGroup);
// Get group by user
router.get('/groups/:name', group_controller.groupByUser);
// Create group
router.post('/group', group_controller.createGroup);
// Add member to existing group
router.post('/groupadd', group_controller.addMember);


app.use('/api', router);
// Route not found
app.use(function (req, res, next) {
    res.status(404).send('Not found');
});

app.listen(process.env.SERVER_PORT, () => console.log('Server started on ' + process.env.SERVER_PORT));
exports.app = app;

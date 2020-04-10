const express = require('express')
const cors = require('cors')
require('dotenv').config()
var router = express.Router();
var user_controller = require("./routes/userAPI");
//var testAPIRouter = require("./routes/testAPI");
//var testDBRouter = require("./routes/testDB");



const app = express()
app.use(cors());
app.use(express.json());
app.use(require("body-parser").json())

app.get('/', (req, res) => {
    res.status(200).send("Hey");
});



// Test Routes
//apiRouter.use('/test', testAPIRouter);
//apiRouter.use('/user/:username/:password', userAuth);
//apiRouter.use("/testDB", testDBRouter);


// User login/register routes using bcrypt
router.post('/user', user_controller.add_user);
router.get('/user', user_controller.login);


app.use('/api', router);
// Route not found
app.use(function (req, res, next) {
    res.status(404).send('Not found');
});

app.listen(process.env.SERVER_PORT, () => console.log('Server started on ' + process.env.SERVER_PORT));

exports.app = app;
const express = require('express')
const cors = require('cors')
var router = express.Router();
require('dotenv').config()
var testAPIRouter = require("./routes/testAPI");
var testDB = require("./routes/testDB");


const app = express()
app.use(cors());
app.use(express.json());
app.use(require("body-parser").json())

app.get('/', (req, res) => {
    res.status(200).send("Hey");
});

app.use('/test', testAPIRouter);
app.use('/testDB', testDB);

app.use('/api', router);
app.use(function (req, res, next) {
    res.status(404).send('Not found');
});

app.listen(process.env.SERVER_PORT, () => console.log('Server started on ' + process.env.SERVER_PORT));

exports.app = app;
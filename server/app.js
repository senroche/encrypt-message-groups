const express = require('express')
const cors = require('cors')
require('dotenv').config()
var testAPIRouter = require("./routes/testAPI");


const app = express()
app.use(cors());
app.use(express.json());
app.use(require("body-parser").json())

app.get('/', (req, res) => {
    res.status(200).send("Hey");
});

const apiRouter = express.Router();
app.use('/api', apiRouter);

// Router for api
apiRouter.use('/test', testAPIRouter);


// Route not found
app.use(function (req, res, next) {
    res.status(404).send('Not found');
});

app.listen(process.env.SERVER_PORT, () => console.log('Server started on ' + process.env.SERVER_PORT));

exports.app = app;
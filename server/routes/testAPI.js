var express = require("express");
var router = express.Router();

//API tests go here
router.get("/", function (req, res, next) {
    res.status("API is working properly");
});

module.exports = router;

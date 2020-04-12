const UserModel = require("../db-models/UserModel.js");
var randtoken = require('rand-token');


exports.login = async function (req, res) {
    // Fetching user and test password verification
    UserModel.findOne({ username: req.body.username }, function (err, user) {
        if (err) throw err;
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (err) {
                res.status(400).json(err);
            }
            res.status(200).json(isMatch);
        });
    });
}


exports.addUser = async function (req, res) {
    let param = req.body;
    var priv = randtoken.generate(64);
    var pub = randtoken.generate(64);
    if (!param) {
        res.status(400).json({ "error": true, "message": "empty request body." });
        return;
    }
    if (!param.username) {
        res.status(400).json({ "error": true, "message": "Request needs user." });
        return;
    }
    if (!param.password) {
        res.status(400).json({ "error": true, "message": "Request needs password." });
        return;
    }

    var testUser = new UserModel({
        username: param.username,
        password: param.password,
        private_key: priv,
        public_key: pub
    });

    const newUser = await testUser.save();
    res.status(200).json(newUser);
};


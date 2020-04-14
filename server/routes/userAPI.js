const UserModel = require("../db-models/UserModel.js");

exports.login = async function (req, res) {
    // Fetching user and test password verification
    UserModel.findOne({ username: req.params.username }, function (err, user) {
        if (err || !user) {
            // THIS WORKS
            res.status(200).json(false);
        }
        else {
            user.comparePassword(req.params.password, function (err, isMatch) {
                if (err) {
                    res.status(400).json(err);
                }
                res.status(200).json(isMatch);
            });
        }
    });
}

exports.returnUser = async function (req, res) {
    // Fetching user and test password verification
    UserModel.findOne({ username: req.params.username }, function (err, user) {
        if (err || !user) {
            // THIS WORKS
            res.status(200).json(false);
        }
        else {
            res.send(user);
        }
    });
}


exports.addUser = async function (req, res) {
    let param = req.body;
    var testUser = new UserModel({
        username: param.username,
        password: param.password,
    });

    const newUser = await testUser.save();
    res.status(200).json(newUser);
};




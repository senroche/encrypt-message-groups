

const db = require("../database");

exports.login = async function (req, res) {
    // fetch user and test password verification
    db.UserModel.findOne({ username: req.body.username }, function (err, user) {
        // If we can't find a user create a new one
        if (err) throw err;

        user.comparePassword(req.body.password, function (err, isMatch) {
            if (err) {
                res.status(400).json(err);
            }
            res.status(200).json(isMatch);
        });
    });
}

exports.add_user = async function (req, res) {
    let param = req.body;
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
    var testUser = new db.UserModel({
        username: param.username,
        password: param.password
    });

    const newUser = await testUser.save();
    res.status(200).json(newUser);
};


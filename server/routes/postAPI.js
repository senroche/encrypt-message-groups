const PostModel = require("../db-models/PostModel.js");

exports.newPost = async function (req, res) {

    let param = req.body;
    var post = new PostModel({
        group_name: param.group,
        author: param.author,
        content: param.content,
        date: Date.now(),
    });

    const newPost = await post.save();
    res.status(200).json(newPost);
};

// Entering {group: _____} in the body of the request will get you posts
// for that user
exports.getPosts = async function (req, res) {
    let param = req.body;
    //If group name is enterred, filter
    let filter = {}
    if (param.group) {
        filter = { group_name: param.group }
    }
    try {
        let intents = await PostModel.find(filter);
        res.status(200).json(intents);
        return;
    } catch (err) {
        res.status(400).send({ "error": true, "message": err });
        return;
    }
}


const PostModel = require("../db-models/PostModel.js");
const GroupModel = require("../db-models/GroupModel.js");
var CryptoJS = require("crypto-js");

async function getGroup(group) {
    var g = await GroupModel.find({ name: group }, (err, Groups) => {
        if (err) {
            return (0)
        }
        if (!Groups.length) {
            return (0)
        }
        return Groups
    }).catch(err => console.log(err))
    return g;
}

// Get group name -> use key to encrypt
exports.newPost = async function (req, res) {
    let param = req.body;
    let groupName = req.body.group;
    const getG = await getGroup(groupName);
    var secret = getG[0].key;

    // Encrypt post before adding it to the db
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(param.content), secret).toString();
    var post = new PostModel({
        group_name: param.group,
        author: param.author,
        content: ciphertext,
        date: Date.now()
    });
    const newPost = await post.save();
    if (newPost != post) {
        res.send(400).json("Error");
    }
    res.send(200).json(newPost);
};


async function groups(username) {
    var g = await GroupModel.find({ members: username }, (err, Group) => {
        if (err) {
            return err;
        }
        if (!Group) {
            return err;
        }
        var groups = [];
        for (i = 0; i < Group.length; i++) {
            console.log(Group[i].name)
            groups.push(Group[i].name)
        }
        return groups
    }).catch(err => console.log(err));
    return g;
}

//Get group name -> use key to decrypt
exports.getPosts = async function (req, res) {

    // Find groups the user is a member of
    const groupsMemberOf = await groups(req.params.username);
    console.log(groupsMemberOf[0]);
    // Get all posts
    const getposts = await PostModel.find({});
    var posts = getposts;

    for (var j = 0; j < groupsMemberOf.length; j++) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].group_name === groupsMemberOf[j].name) {
                console.log("THIS MATCHES");
                const getKey = await getGroup(groupsMemberOf[j].name);
                var key = getKey[0].key;
                ciphertext = posts[i].content;

                //DECRYPTION
                console.log("ENCRYPTED", ciphertext);
                var bytes = CryptoJS.AES.decrypt(ciphertext, key);
                decryptedData = (bytes.toString(CryptoJS.enc.Utf8));
                posts[i].content = decryptedData;
                console.log("DECRYPTED", decryptedData);
            }
        }
    }
    res.status(200).send(posts);

    return;

}






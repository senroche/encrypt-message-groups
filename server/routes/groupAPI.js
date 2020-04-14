const GroupModel = require("../db-models/GroupModel.js");
var randtoken = require('rand-token');
/*
{
	"name":"seanie",
	"members": ["catshit","dogshit","shit"]
}
*/
exports.createGroup = async function (req, res) {
    var params = req.body
    try {
        const group = new GroupModel({
            name: params.name,
            members: params.members,
            key: randtoken.generate(30)
        });

        const newGroup = await group.save();
        res.status(200).json(newGroup);
    }
    catch (err) {
        res.status(400).send({ "error": true, "message": err });
    }
};

/*
{
	{
	"group":"seanie",
	"username": "nut"
    }
}
*/

exports.addMember = async function (req, res) {
    let params = req.body;
    let tgroup = await GroupModel.findOne({ 'name': params.group });

    try {

        tgroup.members.push(params.username);
        const updatedGroup = await tgroup.save();
        res.status(200).json(updatedGroup);
    }
    catch (err) {
        res.status(400).send({ "error": true, "message": err });
    }
};

exports.groupByUser = async (req, res) => {
    await GroupModel.find({ members: req.params.name }, (err, Group) => {
        if (err) {
            return res.status(400).json({ success: false, error: "err" })
        }
        if (!Group) {
            return res.status(404).json({ success: false, error: `Group not found` })
        }
        var groups = [];
        for (i = 0; i < Group.length; i++) {
            console.log(Group[i].name)
            groups.push(Group[i].name)
        }
        res.status(200).json(groups);
    }).catch(err => console.log(err));
}

exports.getGroups = async (req, res) => {
    await GroupModel.find({}, (err, Groups) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Groups.length) {
            return res
                .status(404)
                .json({ success: false, error: `Group not found` })
        }
        return res.status(200).json({ success: true, data: Groups })
    }).catch(err => console.log(err))
}

exports.getGroup = async (req, res) => {
    await GroupModel.find({ name: req.params.name }, (err, Groups) => {
        if (err) {
            res(0)
        }
        if (!Groups.length) {
            res(0)
        }
        res.send(Groups);
    }).catch(err => console.log(err))
}


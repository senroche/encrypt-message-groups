const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const GroupSchema = new Schema(
    {
        name: { type: String, required: true },
        members: { type: [String] },
        key: { type: String, required: true },
    },
)

module.exports = mongoose.model('GroupModel', GroupSchema);
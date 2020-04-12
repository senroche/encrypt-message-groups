const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    member: [
        {
            name: { type: String, required: true },
            public_key: { type: String, required: true }
        }
    ],
});


module.exports = mongoose.model('GroupModel', GroupSchema);
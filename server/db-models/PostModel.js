const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    group_name: {
        type: String, required: true
    },
    author: {
        type: String, required: true
    },
    content: {
        type: String, required: true
    },
    date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('PostModel', PostSchema);
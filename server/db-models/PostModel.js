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


PostSchema.methods.newPost = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = mongoose.model('PostModel', PostSchema);
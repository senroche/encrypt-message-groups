const mongoose = require('mongoose');

mongoose.connect("mongodb://user:password@db:27017/db", { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error("DB not working", error));
db.once('open', () => {
    console.log('Dabase connection is working');
});


var bcrypt = require('bcryptjs');
var saltFactor = 10;


var Schema = mongoose.Schema,

var UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});


UserSchema.pre('save', function (next) {
    var user = this;
    // We only want to hash if it's modified
    if (!user.isModified('password')) return next();
    // Generate salt
    bcrypt.genSalt(saltFactor, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const UserModel = mongoose.model('user', UserSchema);

module.exports = {
    db: db,
    UserModel: UserModel,
}
// Setup database connection
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Working'));

// Schemas
var Schema = mongoose.Schema;

var testSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    expressions: [String],
    last_updated: { type: Date, default: Date.now },
});

const TestModel = mongoose.model('test', testSchema);


module.exports = {
    TestModel: TestModel,

}
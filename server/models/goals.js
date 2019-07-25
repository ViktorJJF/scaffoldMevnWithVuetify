const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let goalSchema = new Schema({
    state: {
        type: Boolean,
        default: false
    },
    description: String,
    timeLimit: String,
    date: {
        type: Number,
    }
});

module.exports = mongoose.model('Goals', goalSchema);
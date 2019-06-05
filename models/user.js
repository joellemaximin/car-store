let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});

let user = module.exports = mongoose.model('users', userSchema);
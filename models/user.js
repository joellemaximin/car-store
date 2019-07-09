let mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');
// const saltRounds = 10;

let userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
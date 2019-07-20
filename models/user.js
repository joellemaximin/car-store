let mongoose = require('mongoose');
var Schema = mongoose.Schema;


let userSchema = mongoose.Schema({
    email: {
        type: String, 
        required: true
    },
    hash: { 
        type: String, 
        required: true
    },
    username: {
        type: String,
        unique: true, 
        required: true
    },
    createdDate: { 
        type: Date, 
        default: Date.now 
    }

});

// Schema.set('toJSON', { virtuals: true });

let user = module.exports = mongoose.model('users', userSchema);
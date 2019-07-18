let mongoose = require('mongoose');
var Schema = mongoose.Schema;


let userSchema = mongoose.Schema({
    // comment: {
    //     type: mongoose.Schema.Type.ObjectId, ref: 'comments',
    //     require: false
    // },
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
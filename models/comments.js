let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let commentSchema = mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    date : { 
        type : Date, 
        default : Date.now 
    },
    active: {
        Boolean,
    }
    

});

let Comment = module.exports = mongoose.model('comments', commentSchema);
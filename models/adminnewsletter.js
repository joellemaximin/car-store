let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let newsladminSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        require: false
    },
    date: {
        type: Number,
        require: true
    }

});

let newslAdmin = module.exports = mongoose.model('newsletteradmins', newsladminSchema);

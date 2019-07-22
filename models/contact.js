const mongoose = require('mongoose');
var Schema = mongoose.Schema;


let contactSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    vehiculeregistrationNo: {
        type: String,
        require: false
    },
    message: {
        type: String,
        require: false
    }
});

let Contact = module.exports = mongoose.model('contacts', contactSchema);
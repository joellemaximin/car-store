const mongoose = require('mongoose');
var Schema = mongoose.Schema;


let contactSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
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
    querytype: {
        type: String,
        require: true
    },
    vehicleRegistrationNo: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: false
    }
});

let Contact = module.exports = mongoose.model('contacts', contactSchema);
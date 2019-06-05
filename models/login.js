const mongoose = require('mongoose');
var Schema = mongoose.Schema;


let contactSchema = mongoose.Schema({
    

    email: {
        type: String,
        require: true
    },
    
});

let Contact = module.exports = mongoose.model('contacts', contactSchema);
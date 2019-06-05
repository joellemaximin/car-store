const mongoose = require('mongoose');
var Schema = mongoose.Schema;


let newsletterSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    }
});

let Newsletter = module.exports = mongoose.model('newsletters', newsletterSchema);
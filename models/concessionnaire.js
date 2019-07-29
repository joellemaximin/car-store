    
let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let concessionnaireSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    adresse: {
        type: String,
        require: true
    },
    ville: {
        type: String,
        require: false
    },
    code_postale: {
        type: String,
        require: true
    }

});

let concessionaire = module.exports = mongoose.model('concessionaires', concessionnaireSchema);
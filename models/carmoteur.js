let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let MoteurSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    chevaux: {
        type: String,
        require: false,
    },
    puissance_fiscale: {
        type: String,
        require: false,
    },
    KM: {
        type: String,
        require: false,
    },
    CO2: {
        type: String,
        require: false,
    },
    price: {
        type: Number,
        require: true,
    }

        

});

let carMoteur = module.exports = mongoose.model('moteurs', MoteurSchema);
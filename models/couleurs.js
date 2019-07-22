let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let couleurSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }        

});

let CarCouleurs = module.exports = mongoose.model('couleurs', couleurSchema);
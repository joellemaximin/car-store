let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let categorySchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    }        

});

let CarCouleurs = module.exports = mongoose.model('couleurs', categorySchema);
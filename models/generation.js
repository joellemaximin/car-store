let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let generationSchema = mongoose.Schema({
    year_begin: {
        type: Number,
        require: true
    },
    year_end: {
        type: Number,
        require: true
    }

});

let carGeneration = module.exports = mongoose.model('cargenerations', generationSchema);
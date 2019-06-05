let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let carTypeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    images: {
        type: String,
        require: false
    }

});

let carType = module.exports = mongoose.model('cartypes', carTypeSchema);
let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let placeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: false
    }

});

let carPlaces = module.exports = mongoose.model('carplaces', placeSchema);
let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let janteSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    images: {
        type: String,
        require: false
    }

});

let carJante = module.exports = mongoose.model('carjantes', janteSchema);
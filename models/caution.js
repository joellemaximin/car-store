let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let CautionSchema = mongoose.Schema({
    price: {
        type: Number,
        require: true
    }
        

});

let carCaution = module.exports = mongoose.model('Caution', CautionSchema);
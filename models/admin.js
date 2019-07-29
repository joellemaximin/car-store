let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let caradminSchema = mongoose.Schema({
    car_name: {
        type: String,
        require: true,
    },
    car_price: {
        type: String,
        require: true
    }, 
    reprise: {
        type: String,
        require: true
    },     
    options: {
        type: String,
        require: true
    },
    couleurs:{
        type: String,
        require: true
    },
    moteurs: [ {
        type: String,
    } ],
    places: {
        type: Number,
        require: true
    },
    caution: {
        type: Number,
    },
    finance_and_cost:{
        type: String,
    },


});

// caradminSchema = caradminSchema._id.toString();
let Admin = module.exports = mongoose.model('caradmins', caradminSchema);
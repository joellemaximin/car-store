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
    car_type: {
        type: String,
        require: true
    },     
    options: {
        type: String,
        options: [{type: mongoose.Schema.Types.ObjectId, ref: 'options'}],
        require: true,
    },
    car_images: {
        type: String,
        require: false
    },
    couleurs:{
        type: String,
        ref: 'couleurs',
        require: true
    },
    moteur: [ {
        type: String,
    } ],
    finance: {
        type: String,
        ref: 'finance_and_cost',
    },
    places: {
        type: Number,
        require: true
    },
    carimage: {
        type: String,
    }


});

// caradminSchema = caradminSchema._id.toString();
let Admin = module.exports = mongoose.model('caradmins', caradminSchema);
 
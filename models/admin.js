let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let caradminSchema = mongoose.Schema({
    car_name: {
        type: String,
        require: true
    },
    car_price: {
        type: String,
        require: true
    }, 
    car_type: {
        type: String,
        require: true
    },     
    car_options: {
        type: String,
        require: true
    },
    // car_images: {
    //     type: String,
    //     require: false
    // },
    car_couleur: {
        type: String,
        require: true
    },
    car_moteur: {
        type: String,
        require: true
    }, 
    car_jantes: {
        type: String, 
        require: true
    }

});

let Admin = module.exports = mongoose.model('caradmins', caradminSchema);

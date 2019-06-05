let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let carSchema = mongoose.Schema({
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
    },
    caroption: {
        // type: Schema.Types.ObjectId,
        type: String,
        ref: 'caroptions',
        require: true
    },
    carcouleur: {
        type: String,
        ref: 'carcouleurs',
        require: true
    },
    carmoteur: {
        type: String,
        ref: 'carmoteurs',
        require: true
    },
    carjante: {
        type: String,
        ref: 'carjantes',
        require: true
    },
    cartype: {
        type: String,
        ref: 'cartypes',
        require: true
    }

});

let carModele = module.exports = mongoose.model('carmodelees', carSchema);
let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let OptionSchema = mongoose.Schema({
    category: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    more: {
        type: String,
        require: false,
    },
    more1: {
        type: String,
        require: false,
    },
    price: {
        type: Number,
        require: true,
    },
    // cars: {
    //     type: String,
    //     ref: 'carmodelees',
    //     require: true
    // }

        

});

let caroption = module.exports = mongoose.model('caroptions', OptionSchema);
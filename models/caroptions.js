let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let OptionSchema = mongoose.Schema({
    category: [ {
        type: String,
        category: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
    } ],
    information: {
        type: String,
    },
    info: {
        type: String,
    },
    price: {
        type: Number,
        require: true,
    }        

});

let caroption = module.exports = mongoose.model('options', OptionSchema);


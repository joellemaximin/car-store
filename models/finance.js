let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let fianceSchema = mongoose.Schema({
    ABI: {
        type: Number,
    },
    caution: {
        type: Number,
    },
    total_credits: {
        type: String,
    },
    Durée: {
        type: Number,
    },
    Droits_accise: {
        type: Number
    }

});

let finance = module.exports = mongoose.model('finance_and_cost', fianceSchema);
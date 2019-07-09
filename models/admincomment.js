let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let commentadminSchema = mongoose.Schema({
    firstame: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        require: true
    },
    numero: {
        type: String,
        require: true
    }

});

let commentAdmin = module.exports = mongoose.model('commentadmins', commentadminSchema);

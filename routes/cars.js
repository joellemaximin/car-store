let express = require('express');
let router = express.Router();

//get the comment model
let Car = require('../models/cars');

router.get('/', function(req, res){
    Car.find({}, function(err, cars){
        if(err){
            console.log(err);
        } else {
            console.log(cars);
            
            res.render('vehicules', {
               title: 'Toutes nos voitures',
               cars: cars
            });
        }
    });

    
});





module.exports = router;

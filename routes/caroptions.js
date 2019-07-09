let express = require('express');
let router = express.Router();

//get the comment model
let Option = require('../models/caroption');

router.get('/', function(req, res){
    Option.find({}, function(err, options){
        if(err){
            console.log(err);
        } else {
            // console.log(options);
            
            res.render('vehiculesoptions', {
               title: 'options',
               options: options
            });
        }
    });

});

router.get('/add', function(req, res){
    Option.find({}, function(err, options){
        if(err){
            console.log(err);
        } else {
            res.render('add_car', {
            options: options
            });
        }
    });

});


// router.post('/add', function(req, res){
//         let car = new cars();
//         // car.first_name = req.body.first_name;
//         // car.last_name = req.body.last_name;
//         // car.email = req.body.email;
//         // car.body = req.body.body;

//         cars.save(function (err){
//             if(err){
//                 console.log(err);
//                 return;
//             } else {
//                 res.redirect('/vehicules');
//             }
//         });
    
// });

// //get a single cars
// router.get('/:id', function(req, res){
//     cars.findById(req.params.id, function(err, cars){
//         // console.log(cars);
//         // return; to look in the console
//         res.render('cars', {
//             title: 'Votre carsaire', 
//             cars: cars
//         });
//     });

// });

// //edit one single comment
// router.get('/edit/:id', function(req, res){
//     Comment.findById(req.params.id, function(err, comment){
//         res.render('edit_comment', {
//         title: "Editer un commentaire",
//         comment:comment
//         });
//     });
// });


// router.post('/edit/:id', function(req, res){
//     let comment = {};
//     comment.first_name = req.body.first_name;
//     comment.last_name = req.body.last_name;
//     comment.email = req.body.email;
//     comment.body = req.body.body;

//     let query = {_id:req.params.id}

//     Comment.update(query, comment, function(err){
//         if(err){
//             console.log(err);
//             return;
//         } else {
//             // res.flash('success', 'Comment Update')
//             res.redirect('/comments');
//         }
//     });
// });

// //deleting post
// router.delete('/:id', function(req,res){
//     let query = {_id:query.params.id}

//     Comment.remove(query, function(err){
//         if(err){
//             console.log(err)
//         }
//         // res.flash('  ', 'Comment Delete')
//         res.send('Success');
//     });
// });

module.exports = router;

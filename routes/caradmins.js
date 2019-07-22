let express = require('express');
let router = express.Router();
const multer = require('multer');
// var upload = multer({ dest: 'uploads/' })
var app = express();

app.use(express.static('./public'));

//set Storage Engine for multer
// const storage = multer.diskStorage({
//     destination: './public/uploads/',
//     filename: function(req, file, cb){
//         cb(null, file.fieldname + '-' + Date.now() +
//         path.extname(file.originalname));
//     }
// });

//Init upload
// const upload = multer({
//     storage: storage,
//     limits: {fileSize: 1000000},
//     fileFilter: function(req, file, cb){
//         checkFileType(file, cb)
//     }
// }).single('myImg');

//check file type
// function checkFileType(file, cb){
//     const filetypes = /jpeg|jpg|png|gif/;
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);

//     if(mimetype && extname) {
//         return cb(null, true);
//     } else {
//         cb('Error: Images Accepté seulement');
//     }
// }

let Car = require('../models/admin');

router.get('/', function(req, res){
    // options:
    // req.params.options, couleurs:
    //     req.params.couleurs, moteurs:
    //         req.params.moteur, finance_and_cost:
    //             req.params.finance_and_cost
    Car.find({}, function(err, cars){

        if(err){
            console.log(err);
        } else {
            console.log(cars, " affiche les");

            res.render('admin', {
                title: "Admin page",
                cars: cars
            })
        }
    })
});



router.get('/add', function(req, res){
    Car.find({}, function(err, cars){
        if(err){
            console.log(err);
        } else {
            res.render('add_caradmin', {
            cars: cars
            });
        }
    });

});


router.post('/add', function(req, res){
    // req.checkbody('firstname', 'Votre prénom est demandé');
    // req.checkbody('lastname', 'Votre nom est demandé');
    // req.checkbody('email', 'Votre email est demandé');

    // let errors = req.validationErrors();
    // if(errors){
    //     res.render('add_admin', {
    //         errors:errors
    //     });
    // } else {
        // upload(req, res, (err) => {

        //     console.log(req.file);
        //     res.send('test')
                // if(req.file == undefined){
                //     res.render('index', {
                //         msg: 'Error: No File selected!'
                //     });
                // } else {
                //     if (req.file == undefined){
                //         res.render('index', {
                //             msg: 'Error: Pas de fichier sélectionner'
                //         });
                //     } else {
                //         res.render('index', {
                //             msg: 'Fichier uploaded',
                //             file: 'uploads/${req.file.filename}'
                //         });
                //     }
                // }
        //     }
        // )

        let car = new Car();
        car.car_name = req.body.car_name;
        car.car_price = req.body.car_price;
        car.finance_and_cost = req.body.finance_and_cost;
        car.couleurs = req.body.couleurs;
        car.options = req.body.options;
        car.car_images = req.body.car_images;
        car.carimage = req.body.carimage;
        car.moteurs = req.body.moteurs;
        car.car_type = req.body.car_type;
        car.places = req.body.places;
        
        
        car.save(function (err, car){
            if(err){
                console.log(err);
                return;
            } else {
                console.log(car)
                res.redirect('/admin');
            }
        });
    
});

//get a single car
router.get('/:id', function(req, res){
    Car.findById(req.params.id, function(err, car){
        // console.log(car);
        // return; to look in the console
        res.render('caradmin', {
            title: 'Editer une voiture', 
            car: car
        });
    });

});

//edit one single car admin
router.get('/edit/:id', function(req, res){
    Car.findById(req.params.id, function(err, car){
        res.render('edit_caradmin', {
        title: "Editer une voiture",
        car:car
        });
    });
});


router.post('/edit/:id', function(req, res){
    let car = {};
    car.car_name = req.body.car_name;
    car.car_price = req.body.car_price;
    car.finance_and_cost = req.body.finance_and_cost;
    car.couleurs = req.body.couleurs;
    car.options = req.body.options;
    car.car_images = req.body.car_images;
    car.carimage = req.body.carimage;
    car.moteur = req.body.moteur;
    car.car_type = req.body.car_type;
    car.places = req.body.places;

    let query = {_id:req.params.id}

    Car.update(query, car, function(err){
        if(err){
            console.log(err);
            return;
        } else {
            // res.flash('success', 'Comment Update')
            res.redirect('/admin');
        }
    });
});

//deleting post
// router.route('/test/:id')
// router.get("/test/:id", function(req,res){

//     Car.findById(req.params.id, function(err, car){
//         {
//         car:car
//         };
//     });
// });
    // let query = {_id:query.params.id}

    // Car.remove(query, function(err){
    //     if(err){
    //         console.log(err)
    //     }
        // res.flash('  ', 'Comment Delete')
// router.delete("/test/:id",function(req,res){
//         Car.deleteOne({_id: req.params._id}, function(err, car){
//          console.log(Car, "TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES")            

//             if (err){
//             res.send(err)
//         }
//         res.json({message : car._id + "tout est supprimé baby sexy love de tout mon coeur qui m'exite la cuisse quand je bad devant la télé comme un américain moyen"});
//         // res.send('Success'); 
        
// })
// });

router.delete('/delete/:id', function(req, res){
    console.log(req)
    Car.remove({ _id: req.params.id }, function(err) {
        if (!err) {
            res.send("ok supprimé")
        }
        else {
            res.send('error');
        }
    });
});


module.exports = router;


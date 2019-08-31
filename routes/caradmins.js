
let express = require('express');
let router = express.Router();


const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
// const config = require ('../config/database');
// const mongoose = require("mongoose");
// mongoose.connect(config.database)
// let db = mongoose.connection;
// util = require('util');
// const uri = config.database;
// const client = new MongoClient(uri, { useNewUrlParser: true });



const multer = require('multer');
const fs = require('fs');
const upload = multer();



// var app = express();
const path = require("path");

// let storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         callback(null, 'uploads')
//     },
//     filename: function(req, file, callback) {
//         console.log(file)
//         callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })

// var upload = multer({storage: storage})
let Car = require('../models/admin');

    
router.get('/', function(req, res, next){
    Car.find({}, function(err, cars){
        if(err){
            console.log(err);
        } else {

            res.render('admin', {
                
                cars: cars,
                // img : fuck
            })
        }
    })

    let imageName = 'uploads/' + req.query.imagename;
    fs.readFile(imageName, (err, imageData)=> {
        // console.log(res.send(imageName.imageData))
        if (err) {
            // res.json({
            //     res: "failed",
            //     message: 'Cant read image'
            // });
            console.log(err)
            return;
        }
        // console.log(err);
        res.writeHead(200, {"Content-Type": 'image/jpeg'});
        res.end(imageData);
    })
});


router.get('/add', function(req, res){
    Car.find({}, function(err, cars){
            if(err){
                console.log(err);
            } else {
                // console.log(cars)
     
     
            // res.sendFile(__dirname + '/index.pug')
            // res.send(imgArray);
            res.render('add_caradmin', {
            cars: cars
        });
        }
    })




});


router.post('/add', upload.any(), function(req, res){
     console.log(req.files);
  
        let formidable = require('formidable');
        // console.log(req.body.myImg);
        
        var form = new formidable.IncomingForm();
        form.uploadDir = './uploads';
        form.keepExtensions= true;
        form.maxFieldsSize = 10 * 1024 * 1024; //10MB
        form.multiples = true;
        let uploaded_file_path;
        form.parse(req, (err, fields, files)=> {
            console.log(files);
            uploaded_file_path = (files.myImg) ? files.myImg.path.replace("uploads\\", "") : null
            // console.log(files);
            
            // if (err){
            //     console.log(err)
    
            //     res.json({
            //         result: "failed",
            //         data: {},
            //         message: 'L/n image ne peut pas se télécahrge: '
            //     });
    
            // }
            // var arrayOffiles = files[""];
            // if (arrayOffiles.length > 0) {
            //     var filesNames = [];
            //     arrayOffiles.forEach((eachFile)=> {
            //         // filesNames.push(eachFile.path)
            //         filesNames.push(eachFile.path.split('/')[1]);
            //     });
            //     res.json({
            //         result: "all good",
            //         data: filesNames,
            //         numberOfImages: filesNames.length,
            //         message: "Upload images successfully"
            //     });
            // }else{
            //     res.json({
            //         result: "failed",
            //         data: {},
            //         numberOfImages: 0,
            //         message: "No images to upload"
            //     };
            // }
        })

        let car = new Car();
        car.car_name = req.body.car_name;
        car.car_price = req.body.car_price;
        car.finance_and_cost = req.body.finance_and_cost;
        car.couleurs = req.body.couleurs;
        car.moteurs = req.body.moteurs;
        car.places = req.body.places;
        car.caution = req.body.caution;
        car.options = req.body.options;
        car.reprise = req.body.reprise;
        // car.imageData = (uploaded_file_path) ? uploaded_file_path : null;
       
        
        car.save(function (err, car){
            if(err){
                console.log(err);
                return;
            }
                console.log(car)
                res.redirect('/admin');
        
        });
    
    
});

// router.post('/upload_images', (req, res, next)=> {


// })


//get a single car
router.get('/:id', function(req, res){

    Car.findById(req.params.id, function(err, car){
    
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
    //update image
    // if (request.body.imagename && request.body.imagename.length > 0){
    //     const serverName = require('').hostname();
    //     const serverPart = require
    // }
});


router.post('/edit/:id', function(req, res){
    let car = {};
    car.car_name = req.body.car_name;
    car.car_price = req.body.car_price;
    car.finance_and_cost = req.body.finance_and_cost;
    car.couleurs = req.body.couleurs;
    car.moteurs = req.body.moteurs;
    car.places = req.body.places;
    car.caution = req.body.caution;
    car.options = req.body.options;
    car.reprise = req.body.reprise;

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


    // Car.find()
    //   .select('option car_name car_price')
    //   .exec()
    //   .then(docs => {
    //       res.status(200).json({
    //           count: docs.length,
    //           cars: docs.map(doc => {
    //             return {
    //               _id: doc._id,
    //               option: doc.option,
    //               car_name: doc.car_name,
    //               car_price: doc.car_price,
    //                 request: {
    //                   type: 'GET',
    //                   url: 'http://localhost:3000/admin/' + doc._id
    //                 }
    //             }

    //         })
    //     })
    // })

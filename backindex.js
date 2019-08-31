const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config()

var uri = "mongodb+srv://jojo:12345@cluster0-bse2l.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true});
var db = mongoose.connection;

// const config = require ('./config/database');
// mongoose.connect(process.env.MONGODB_URI, config.database);
// let db = mongoose.connection;

var nodemailer = require('nodemailer');

// check connection
db.once('open', ()=> {
    console.log('Connecteed to MongoDB');
});

//Show errors
db.on('error', function(err){
    console.log(err)
}); 

var app = express();
const path = require("path");
const cors = require('cors')

//parse application
app.use(bodyParser.urlencoded({ extended: false }))

// parse application to json
app.use(bodyParser.json())

// view engine setup
app.use(express.static('./public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use('/uploads', express.static(uploads));
// var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
const expressValidator = require('express-validator');
const validator = require('validator');
const {
    body,
    validationResult
} = require('express-validator/check');
// // Express Session Middleware
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
// //   cookie: { secure: true }
// }))

//try express messsages
// app.use(require('connect-flash')());
// app.use(function (req, res, next) {
//   res.locals.messages = require('express-messages')(req, res);
//   next();
// });




// let Car = require('./models/cars');
let Contact = require('./models/contact');

let User = require('./models/user');
// let Newsletter = require('./models/newsletter');
let Comment = require('./models/comments');
let Admin = require('./models/admin');

////////////////////////////////////////////////////////////////////////////////////////

// Les models
var Users = mongoose.model('users');
var Contacts = mongoose.model('contacts');
var Comments = mongoose.model('comments');
var Admins = mongoose.model('caradmins');


// var generations = mongoose.model('cargenerations');



app.use(express.urlencoded({
    extended: true
}))

// app.post('/',
//     body('url')
//     .custom((value, { req }) => {
//         // make optional
//         if (!value) {
//             return true
//         }

//         if (req.body.param && !value) {
//             throw new Error('url is required if "param" was provided');
//         }

//         if (!validator.isURL(value)) {
//             throw new Error('Invalid URL');
//         }

//         return false
//     }),
//     body('param').optiona l(),
//     (req, res) => {
//         res.send(validationResult(req).array())
    
// });

//Passport config
require('./config/passport')(passport);
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next){
    res.locals.user= req.user || null;
    next();
});

//// MES ROUTES

let commentaires = require('./routes/comments');
app.use('/comments', commentaires);

let users = require('./controller/users.controller');
app.use('/users', users);

let contacts = require('./routes/contacts');
app.use('/contact-us', contacts);

// let cars = require('./routes/cars');
// app.use('/all-cars', cars);

// let options = require('./routes/caroptions');
// app.use('/car-options', options);

let caradmins = require('./routes/caradmins');
app.use('/admin', caradmins);

// let commadmins = require('./routes/commentadmin');
// app.use('/admin-comments', commadmins); 
 

// let usersdmins = require('./routes/newslettersadmins');
// app.use('/admin-newsletters', newsladmins); 

//page home
app.get('/', function(req, res){
    Admin.find({}, function(err, cars){
        if (err)
            console.log(err);
    
            Comments.find({}, function(err, comments){
                if(err){
                    console.log(err);
                } else {
                    res.render('index', {
                        title: "page d'accueil",
                        cars: cars,
                        comments: comments
                    });
                }
            });
    }).limit(4);

    

});

//display the cars by params from document
app.get('/all-cars', function(req, res){
    console.log(req.query)
    if (req.query.moteurs || req.query.car_price || req.query.options){
        Admin.find({$or: [{moteurs: req.query.moteurs }, {car_price: req.query.car_price}, {options: req.query.options}]
        }, function(err, cars){         
        console.log(req.query)
         // console.log(cars);
            res.render('vehicules', {
                title: 'Toutes nos voitures',
                cars: cars
            });
        
        });
    }
    // if (req.query.moteurs && req.query.car_price ) {
    //     Admin.find({$and: [{moteurs: req.query.moteurs }, {car_price: req.query.car_price}]}, function(err, cars){         
          
    //         // console.log(cars);
    //         res.render('vehicules', {
    //             title: 'Toutes nos voitures',
    //             cars: cars
    //         });
        
    //     });
    // }
    // if (req.query.options) {
    //     Admin.find({options: req.query.options}, function(err, cars){
    //         // console.log(cars);
    //         res.render('vehicules', {
    //             title: 'Toutes nos voitures',
    //             cars: cars
    //         });
        
    //     });
    // }
    else {
        Admin.find({}, function(err, cars){
         
            if(err){
                console.log(err);
            } else {
                // console.log(cars);
                res.render('vehicules', {
                   title: 'Toutes nos voitures',
                   cars: cars
                });
            }
        });
    }
});


//display one car
app.get('/all-cars/car/:id', function(req, res){
    Admin.findById(req.params.id, function(err, car){
        // console.log(car);
        // return; to look in the console
        res.render('vehicule', {
            title: 'Affichage une voiture', 
            car: car
        });
    });

});


/////comments routes

app.get('/all-comments', function(req, res){
    Comments.find({}, function(err, comments){
        if(err){
            console.log(err);
        } else {
            res.render('all_comments', {
               title: 'Tous nos commentaires',
               comments: comments
            });
        }
    });
});

//indexpage
app.get('/commentaires', function(req, res){

    Comments.find({}, function(err, comments){
        if(err){
            console.log(err);
        } else {
            res.render('index', {
               comments: comments
            });
        }
    });
});

/////reservation routes

app.get('/reserver-une-voiture', function(req, res){
    Comments.find({}, function(err, comments){
        if(err){
            console.log(err);
        } else {
            res.render('book-car', {
               title: 'Tous nos commentaires',
               comments: comments
            });
        }
    });
});


// // send mail with defined transport object
// app.post('/', function(req, res){
//     let contact = new Contact();
//     contact.firstname = req.body.firstname;
//     contact.email = req.body.email;
//     contact.phone = req.body.phone;

//     contact.save(function(err){
//         if(err){
//             console.log(err);
//             // res.render('error')
//             return;
//         } else {
//             //votre message est bien envoyé
//             res.redirect('/');
//         }
//     });
      
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'joe.maximuum@gmail.com', // generated ethereal user
//         pass: 'objectif2312' // generated ethereal password
//     },
//     tls: {
//     rejectUnauthorized: false
//   }
// });

// // send mail with defined transport object
//     let mailOptions = {
//         from: '"Bienvenue chez LOCAVWATI, Merci de choisir notre service, un de nos conseillers prendra contact avec vous dans un instant." <joe.maximuum@gmail.com>', // sender address
//         to: req.body.email, // list of receivers
//         subject: "LocaVWATI Demande de rendez-vous", // Subject line
//          text:'from Name:'+ req.body.firstname + 'Email:'+req.body.email + 'Numéro:' + req.body.phone,
//         html:'<p>Nom/Prénom:'+ req.body.firstname+', Email:'+req.body.email+',Numéro:' + req.body.phone+ '</li></ul>',
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error){
//             return console.log(error);
//         } else {
//             console.log('Email: '+ info.response)
//             res.redirect('/');
//         }
//         //ajouter un message disant bien envoyé
//     });
// });

// app.listen(3000, function(error){
//     if(!error) console.log("everything works");
// });

const port = process.env.PORT || 3000;
app.listen(port);

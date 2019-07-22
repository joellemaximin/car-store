const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors')
const multer = require('multer');
const config = require ('./config/database');
mongoose.connect(config.database);
let db = mongoose.connection;

 

// check connection
db.once('open', ()=> {
    console.log('Connecteed to MongoDB');
});

//Show errors
db.on('error', function(err){
    console.log(err)
}); 

var app = express();

//parse application
app.use(bodyParser.urlencoded({ extended: false }))

// parse application to json
app.use(bodyParser.json())

// view engine setup
app.use(express.static('./public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


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


// //set Storage Engine for multer
// const storage = multer.diskStorage({
//     destination: './public/uploads/',
//     filename: function(req, file, cb){
//         cb(null, file.fieldname + '-' + Date.now() +
//         path.extname(file.originalname));
//     }
// });

// //Init upload
// const upload = multer({
//     storage: storage,
//     limits: {fileSize: 1000000},
//     fileFilter: function(req, file, cb){
//         checkFileType(file, cb)
//     }
// }).single('myImg');

// // //check file type
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


// let Car = require('./models/cars');
let Contact = require('./models/contact');
let CarOption = require('./models/caroptions');
let CarCouleurs = require('./models/couleurs');
// let concessionaire = require('./models/concessionaire');
let CarType = require('./models/cartype');
let CarMoteur = require('./models/carmoteur');
// let Fin = require('./models/finance');
// let CarGeneration = require('./models/cargeneration');
let User = require('./models/user');
// let Newsletter = require('./models/newsletter');
let Comment = require('./models/comments');
let Admin = require('./models/admin');

////////////////////////////////////////////////////////////////////////////////////////

// Les models
var Users = mongoose.model('users');
// var Cars = mongoose.model('carmodelees');
var Options = mongoose.model('options');
var Couleurs = mongoose.model('couleurs');
var Types = mongoose.model('cartypes');
var Contacts = mongoose.model('contacts');
// var Jantes = mongoose.model('jantes');
var Moteurs = mongoose.model('moteurs');
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

let options = require('./routes/caroptions');
app.use('/car-options', options);

let caradmins = require('./routes/caradmins');
app.use('/admin', caradmins);

let commadmins = require('./routes/commentadmin');
app.use('/admin-comments', commadmins); 
 

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
    });

});


app.get('/all-cars', function(req, res){
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
});



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

//route for filter for cars, for all of them


app.listen(3000, function(error){
    if(!error) console.log("everything works");
});
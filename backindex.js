const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
mongoose.connect("mongodb://localhost/carStore", { useNewUrlParser: true });
//  mongoose.connect("mongodb://127.0.0.1:27017/car-store-master", { useMongoClient: true });
var session = require('express-session');
var flash = require('connect-flash');
// const expressValidator = require('express-validator');
const validator = require('validator');

const {
    body,
    validationResult
} = require('express-validator/check')

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
// app.engine('pug', cons.swig) for html
// var cons = require('consolidate');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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

let Car = require('./models/cars');
let Contact = require('./models/contact');
let CarOption = require('./models/caroption');
let CarCouleurs = require('./models/carcouleur');
// let concessionaire = require('./models/concessionaire');
let CarType = require('./models/cartype');
let CarMoteur = require('./models/carmoteur');
let CarJante = require('./models/carjante');
// let CarGeneration = require('./models/cargeneration');
let User = require('./models/user');
// let Newsletter = require('./models/newsletter');
let Comment = require('./models/comments');
// let CarAdmin = require('./models/admin');

////////////////////////////////////////////////////////////////////////////////////////

// Les models
var Users = mongoose.model('users');
var Cars = mongoose.model('carmodelees');
var Options = mongoose.model('caroptions');
var Couleurs = mongoose.model('carcouleurs');
var Types = mongoose.model('cartypes');
var Jantes = mongoose.model('carjantes');
var Moteurs = mongoose.model('carmoteurs');
var Comments = mongoose.model('comments')
// var Admins = mongoose.model('admins');
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
//     body('param').optional(),
//     (req, res) => {
//         res.send(validationResult(req).array())
    
// });


//// MES ROUTES
app.get('/', function(req, res){
    Cars.find({}, function(err, cars){
        if (err){
            console.log(err);
        } else {
            res.render('index', {
                title: "Toutes nos voitures",
                cars: cars
            }); 
        }
    });
});

//cars routes
app.get('/all-cars', function(req, res){
    Cars.create({"name": "", "price": 23, "image": "", "caroption": "", "carcouleur": "", "cartype": "", "carjante": "", "carmoteur": ""}, function(err, doc) {
        // console.log(err, doc);
   
    Cars.find({}, function(err, cars, doc){
        if (err){
            console.log(err);
        } else {
            // res.send(cars); 
            res.render('vehicules')
        }
    }); 
    });
});


app.post('/admin/addCars', function(req, res){
    let car = new Cars();
    car.first_name = req.body.first_name;
    car.last_name = req.body.last_name;
    car.email = req.body.email;

    Cars.save(function (err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/all-cars');
        }
    });
});

app.get('/contact/add', function(req, res){
    
    Contact.find({}, function(err, cars){
        if (err){
            console.log(err);
        } else {
            res.render('contact', {
               title: 'Ajouter un commentaire'
            });
        }
    });
})

//je récupère mes donnée apres validation du form avec method post
app.post('/contact/add', function(req, res){
    let contact = new Contact();
    contact.firstname = req.body.firstname;
    contact.lastname = req.body.lastname;
    contact.phone = req.body.phone;
    contact.email = req.body.email;
    contact.queryType = req.body.queryType;
    contact.vehicleRegistrationNo = req.body.vehicleRegistrationNo;
    contact.message = req.body.message;

    contact.save(function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    })
    // console.log(req.body.firstname)
    // console.log('Envoyer');
    // return
});

/////////////////requete USER
// app.get('/')

//requete page admin
app.get('/admin', function(req, res){
    res.render('admin', {
        title: "Page admin"
    });
});

app.post('/admin', function(req, res){
    res.render('admin', {
        title: "Page admin"
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
let commentaires = require('./routes/comments');
app.use('/comments', commentaires);

///newsletter routes
// let newsletters = './routes/newsletters';
// app.use('/newsletters', newsletters);

/////////////////////////////////LOGIN
// app.get('/', function(req, res){
//     let login = new Login()
// })



app.listen(3000, function(error){
    if(!error) console.log("everything works");
});
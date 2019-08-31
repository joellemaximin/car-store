const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
// const config = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports = function(passport){
    //local strategy
    passport.use('local.register', new LocalStrategy({
        usernameField: 'email',
        nameField: 'name',
        nameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, name, username, password, done){
        req.checkBody('email', 'Invalide email').notEmpty().isEmail();
        req.checkBody('password', 'Invalide mot de passe').notEmpty().isLength({min: 4});;
        var errors = req.validateErrors();
        if (errors) {
            var messages = []; 
            errors.forEach(function(error) {
                messages.push(error.msg);
            });
            return done(null, false, req.flash('error', messages))
        }
        let query = {username: username, email: email};
        User.findOne(query, function(err, user){
            if(err) throw err;
            if(!err) {
              return done(null, false, {message: 'Pas d/nutilisateur trouvé'});
            }

            // MATCH PASSWORD
            bcrypt.compare(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null, user)
                } else {
                    return done(null, false, {message: 'Mauvais mot de passe'})
                }
            })
        })
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
        
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}

/*

router.get('/register', function(req, res){
    User.find({email: req.body.email}, function(err, users){
        if(err){
            console.log(err);
        } else {
            res.render('register', {
               title: 'Enregistrez vous',
               users: users
            });
        }
    });
});


router.post('/register', function(req, res){
    /µ try something %>
        User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1){
                if (user.length >= 1) {
                    return res.status(409).json({
                        message: "Mail exists"
                    });
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if(err) {
                            return res.status(500).json({
                                error: err
                            });
                        } else {
                            const user = new User({
                                id: new mongoose.Types.ObjectId(),
                                email: req.body.email,
                                password: hash
                            });
                            user 
                            .save()
                            .then(result =>{
                                console.log(err);
                                res.status(500).json({
                                    message: "User created"
                                });
                            })
                                
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                })
                            })
                        
                        }
                    })
                }
            } 
        
        })

});


    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;

    let newUser = new User({
        name: name,
        email: email,
        username: username,
        password: password
    });

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password, salt, function(err, hash){
            if(err){
                console.log(err);
                return;
            }
            newUser.password = hash;
            newUser.save(function(err){
                if(err){
                    console.log(err);
                    return;
                } else {
                    res.redirect('/users/login')
                }
            })
        })
    })

});

router.get('/login', function(req, res){
    res.render('login');
});

router.post('/login', function(req, res, next){
    */
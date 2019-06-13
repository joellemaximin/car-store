let express = require('express');
let router = express.Router();

//get the comment model
let User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
   

router.get('/register', function(req, res){
    User.find({}, function(err, users){
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
    passport.authenticate('local', {
        successRedirect: '/users/clients',
        failureRedirect: '/users/login',
        // failureFlash: true
    })(req, res, next);
    res.render('clients');
});

router.get('/logout', function(req, res){
    req.logout();
    // req.flash('success', 'You are logged out');
    res.redirect('/users/login')
});
module.exports = router;
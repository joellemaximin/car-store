let express = require('express');
let router = express.Router();

//get the comment model
let User = require('../models/comments');

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

    b

});

module.exports = router;
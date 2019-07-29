// const express = require('express');
// const router = express.Router();

// // routes
// router.post('/authenticate', authenticate);
// router.post('/register', register);
// router.get('/', getAll);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.put('/:id', update);
// router.delete('/:id', _delete);

// module.exports = router;

// function authenticate(req, res, next) {
//     userService.authenticate(req.body)
//         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
//         .catch(err => next(err));
// }

// function register(req, res, next) {
//     userService.create(req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function getAll(req, res, next) {
//     userService.getAll()
//         .then(users => res.json(users))
//         .catch(err => next(err));
// }

// function getCurrent(req, res, next) {
//     userService.getById(req.user.sub)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function getById(req, res, next) {
//     userService.getById(req.params.id)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function update(req, res, next) {
//     userService.update(req.params.id, req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function _delete(req, res, next) {
//     userService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }


// let express = require('express');
// let router = express.Router();

// //get the comment model
// let   User     = require('../models/user');
// const bcrypt   = require('bcryptjs');
// const jwt      = require('jsonwebtoken');


// router.get('/register', function(req, res){
//     User.find({email: req.body.email}, function(err, users){
//         if(err){
//             console.log(err);
//         } else {
//             res.render('register', {
//                title: 'Enregistrez vous',
//                users: users
//             });
//         }
//     });
// });

// function authenticate(req, res, next) {
//     userService.authenticate(req.body)
//         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
//         .catch(err => next(err));
// }

// function register(req, res, next) {
//     userService.create(req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function getAll(req, res, next) {
//     userService.getAll()
//         .then(users => res.json(users))
//         .catch(err => next(err));
// }

// function getCurrent(req, res, next) {
//     userService.getById(req.user.sub)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function getById(req, res, next) {
//     userService.getById(req.params.id)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function update(req, res, next) {
//     userService.update(req.params.id, req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function _delete(req, res, next) {
//     userService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }


// router.post('/register', function(req, res){
//     const name = req.body.name;
//     const email = req.body.email;
//     const username = req.body.username;
//     const password = req.body.password;
//     const password2 = req.body.password2;

//     let newUser = new User({
//         name: name,
//         email: email,
//         username: username,
//         password: password
//     });

//     bcrypt.genSalt(10, function(err, salt){
//         bcrypt.hash(newUser.password, salt, function(err, hash){
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             newUser.password = hash;
//             newUser.save(function(err){
//                 if(err){
//                     console.log(err);
//                     return;
//                 } else {
//                     res.redirect('/users/login')
//                 }
//             })
//         })
//     })

// });

// router.get('/login', function(req, res){
//     res.render('login');
// });

// router.post('/login', function(req, res, next){
//         User.findOne({
//              where: {
//                  email: req.body.email
//                     }
//         }).then(function (user) {
//             if (!user) {
//                res.redirect('/clients');
//                console.log(!user)
//             } else {
//             bcrypt.compare(req.body.password, user.password, function (err, result) {
//                 if (result == true) {
//                     res.redirect('/');
//                 } else {
//                     res.send('Incorrect password');
//                     res.redirect('/');
//                 }
//                 console.log(user, "ça marche")
//             });
//         }
//     });
// });

// router.get('/logout', function(req, res){
//     req.logout();
//     // req.flash('success', 'You are logged out');
//     res.redirect('/users/login')
// });
// module.exports = router;
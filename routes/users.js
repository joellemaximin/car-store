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

// const config = require('../config/database');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs'); 
let   User     = require('../models/user');

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(userParam) {
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();

}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}


module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

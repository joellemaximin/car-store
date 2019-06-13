// let express = require('express');
// let router = express.Router();

// router.get('/admin', function(req, res){
//     Admin.find({}, function(err, admins){
//         if(err){
//             console.log(err);
//         } else {
//             res.render('admin', {
//                 title: "Nos lettres",
//                 admins: admins
//             })
//         }
//     })
// });

// router.post('/admin', function(req,res){
//     let admin = new Admin();
//     admin.username = req.body.username;
//     admin.email = req.body.email;
//     admin.password = req.body.password;

//     admin.save(function(err){
//         if(err){
//             return;
//         } else {
//             res.redirect('/admin')
//         }
//     });
    
//     // test si post fonctionne console.log('Bien envoyé');
// });

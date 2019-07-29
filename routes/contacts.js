let express = require('express');
let router = express.Router();
var nodemailer = require('nodemailer');
// let transporter = nodemailer.createTransport(transport[defaults])
//get the comment model
let Contact = require('../models/contact');

router.get('/', function(req, res){
    Contact.find({}, function(err, contacts){
        if (err){
            console.log(err);
        } else {
            // res.send(contacts); 

            res.render('contact', {
                contacts: contacts
            }); 
        }
    });
});

router.get('/envoyer-nous-un-petit-mot', function(req, res){
    
    Contact.find({}, function(err, contacts){
        if (err){
            console.log(err);
        } else {
            res.render('formcontact', {
               title: 'Envoyé un message à notre direction'
            });
        }
    });
})



//je récupère mes donnée apres validation du form avec method post
router.post('/envoyer-nous-un-petit-mot', function(req, res){
    let contact = new Contact();
    contact.firstname = req.body.firstname;
    contact.lastname = req.body.lastname;
    contact.phone = req.body.phone;
    contact.email = req.body.email;
    contact.vehiculeregistrationNo = req.body.vehicleregistrationNo;
    contact.message = req.body.message;

    contact.save(function(err){
        if(err){
            console.log(err);
            // res.render('error')
            return;
        } else {
            //votre message est bien envoyé
            res.redirect('/');
        }
    })
    // // console.log(req.body.firstname)
    // // console.log('Envoyer');
    // // return
    
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'joe.maximuum@gmail.com', // generated ethereal user
        pass: 'objectif2312' // generated ethereal password
    },
    tls: {
    rejectUnauthorized: false
  }
});

// send mail with defined transport object
    let mailOptions = {
        from: '"LocaVwati, Contactez nous" <joe.maximuum@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Bienvenue, merci de nous avoir contactez", // Subject line
        text:'this a a simple test from Name:'+ req.body.firstname + req.body.lastname + 'Email:'+req.body.email + 'Numéro:' + req.body.phone+ 'Numéro Vehicule:' + req.body.vehicleregistrationNo + ' Message:'+req.body.message,
        html:'<p><ul><li>this a a simple test from Name:'+ req.body.firstname+'</li><li> Email:'+req.body.email+'</li><li>Message:'+req.body.message+ 'Numéro:' + req.body.phone+ 'Numéro Vehicule:' + req.body.vehicleregistrationNo +'</li></ul>',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            return console.log(error);
        } else {
            console.log('Email: '+ info.response)
            res.redirect('/');
        }
        //ajouter un message disant bien envoyé
    });
}); 


// main().catch(console.error);
module.exports = router;

    

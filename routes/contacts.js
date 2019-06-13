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
            res.render('add_contact', {
               title: 'Envoyé un message à notre direction'
            });
        }
    });
})

//je récupère mes donnée apres validation du form avec method post
router.post('/envoyer-nous-un-petit-mot', function(req, res){
    // let contact = new Contact();
    // contact.firstname = req.body.firstname;
    // contact.lastname = req.body.lastname;
    // contact.phone = req.body.phone;
    // contact.email = req.body.email;
    // contact.queryType = req.body.queryType;
    // contact.vehicleRegistrationNo = req.body.vehicleRegistrationNo;
    // contact.message = req.body.message;

    // contact.save(function(err){
    //     if(err){
    //         console.log(err);
    //         // res.render('error')
    //         return;
    //     } else {
    //         //votre message est bien envoyé
    //         res.redirect('/');
    //     }
    // })
    // // console.log(req.body.firstname)
    // // console.log('Envoyer');
    // // return
    
let transporter = nodemailer.createTransport({
    service: 'gmail',
    // secure: false,//true
    // port: 25,//465
    // host: "smtp.joellemaximin.mail",
    // port: 587,
    // secure: false, // true for 465, false for other ports
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
        from: '"Restaurant Izzy, Contactez nous" <joe.maximuum@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Bienvenue, merci de nous avoir contacté", // Subject line
        text:'this a a simple test from Name:'+ req.body.firstname + req.body.lastname + 'Email:'+req.body.email + 'Numéro:' + req.body.tel+ 'Numéro Vehicule:' + req.body.vehicleRegistrationNo + 'QueryType:' + req.body.queryType + ' Message:'+req.body.message,
        html:'<p><ul><li>this a a simple test from Name:'+ req.body.firstname+'</li><li> Email:'+req.body.email+'</li><li>Message:'+req.body.message+ 'Numéro:' + req.body.tel+ 'Numéro Vehicule:' + req.body.vehicleRegistrationNo + 'QueryType:' + req.body.queryType +'</li></ul>',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            return console.log(error);
        } else {
            console.log('Email: '+ info.response)
            res.redirect('/');
        }
        // console.log('Message envoyé: %s', info.messageId);
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // res.render('contact', {msg: 'Email a bien été envoyé'});


    });
});

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     // host: "smtp.joellemaximin.mail",
//     // port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'joelle.maximin@gmail.com', // generated ethereal user
//         pass: 'Objectif23' // generated ethereal password
//     }
// });

// // send mail with defined transport object
// let mailOptions = {
//     from: '"Restaurant Izzy, Contactez nous" <test@joellemaximin.com>', // sender address
//     to: "krissane.alexandre@gmail.com", // list of receivers
//     subject: "Bienvenue, merci de nous avoir contacté", // Subject line
//     text: "Ok ici cest mon texte", // plain text body
//     html: Contact // html body
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error){
//         return console.log(error);
//     } else {
//         console.log('Email: '+ info.response)
//     }
//     console.log('Message envoyé: %s', info.messageId);
//     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//     res.render('contact', {msg: 'Email a bien été envoyé'});


// });
// console.log("Message sent: %s", info.messageId);
// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // Preview only available when sending through an Ethereal account
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
module.exports = router;
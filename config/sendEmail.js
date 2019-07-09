const nodemailer = require('nodemailer');
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
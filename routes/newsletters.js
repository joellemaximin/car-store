let express = require('express');
let router = express.router();

app.get('/join-our-newsletter', function(req, res){
    Newsletter.find({}, function(err, newsletters){
        if(err){
            console.log(err);
        } else {
            res.render('newsletter', {
                title: "Nos lettres",
                newsletters: newsletters
            })
        }
    })
});

app.post('/join-our-newsletter', function(req,res){
    let newsletter = new Newsletter();
    newsletter.email = req.body.email;

    newsletter.save(function(err){
        if(err){
            return;
        } else {
            res.redirect('/join-our-newsletter')
        }
    });
    
    // test si post fonctionne console.log('Bien envoyé');
});

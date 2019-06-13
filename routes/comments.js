let express = require('express');
let router = express.Router();

//get the comment model
let Comment = require('../models/comments');

router.get('/', function(req, res){
    Comment.find({}, function(err, comments){
        if(err){
            console.log(err);
        } else {
            res.render('all_comments', {
               title: 'Tous nos commentaires',
               comments: comments
            });
        }
    });

});

router.get('/add', function(req, res){
    Comment.find({}, function(err, comments){
        if(err){
            console.log(err);
        } else {
            res.render('add_comment', {
            comments: comments
            });
        }
    });

});


router.post('/add', function(req, res){
    // req.checkbody('firstname', 'Votre prénom est demandé');
    // req.checkbody('lastname', 'Votre nom est demandé');
    // req.checkbody('email', 'Votre email est demandé');

    // let errors = req.validationErrors();
    // if(errors){
    //     res.render('add_comment', {
    //         errors:errors
    //     });
    // } else {

        let comment = new Comment();
        comment.first_name = req.body.first_name;
        comment.last_name = req.body.last_name;
        comment.email = req.body.email;
        comment.body = req.body.body;

        comment.save(function (err){
            if(err){
                console.log(err);
                return;
            } else {
                res.redirect('/comments');
            }
        });
    
});

//get a single Comment
router.get('/:id', function(req, res){
    Comment.findById(req.params.id, function(err, comment){
        // console.log(comment);
        // return; to look in the console
        res.render('comment', {
            title: 'Votre commentaire', 
            comment: comment
        });
    });

});

//edit one single comment
router.get('/edit/:id', function(req, res){
    Comment.findById(req.params.id, function(err, comment){
        res.render('edit_comment', {
        title: "Editer un commentaire",
        comment:comment
        });
    });
});


router.post('/edit/:id', function(req, res){
    let comment = {};
    comment.first_name = req.body.first_name;
    comment.last_name = req.body.last_name;
    comment.email = req.body.email;
    comment.body = req.body.body;

    let query = {_id:req.params.id}

    Comment.update(query, comment, function(err){
        if(err){
            console.log(err);
            return;
        } else {
            // res.flash('success', 'Comment Update')
            res.redirect('/comments');
        }
    });
});

//deleting post
router.delete('/:id', function(req,res){
    let query = {_id:query.params.id}

    Comment.remove(query, function(err){
        if(err){
            console.log(err)
        }
        // res.flash('  ', 'Comment Delete')
        res.send('Success');
    });
});

module.exports = router;

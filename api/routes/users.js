const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Users = require('../models/users');

// users api
router.get('/',(req,res,next) => {
    Users.find()
            .exec()
            .then(docs =>{
                console.log(docs);
                res.status(200).json(docs);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error:err 
                });
            });
});


router.post('/',(req,res,next) => {
    const user = new Users({
        id: new mongoose.Types.ObjectId(),
        _userName: req.body.userName,
        _userEmail:req.body.userEmail,
        _userPhone:req.body.userPhone,
        _userPassword:req.body.userPassword

    });
    user.save().then(result => {
            console.log(result);
            res.status(201).json({
                message:'Handling POST requests to /users',
                createdProduct: result
        });
    })
    .catch(err => {
        console.log(err);
         res.status(500).json({
             error: err
         });  
    });
});

router.get('/:userId', (req,res,next) => {
         req.params.userId;
       const id = req.params.userId;
       Users.find({_id:id}).exec()
       .then(doc => {
           console.log("From database",doc);
           if(doc) {
            res.status(200).json(doc);
           }else{
               res.status(404).json({
                   message: 'No valid entry found'
               });
           }
           
       }).catch(err => {
           console.log(err);
           res.status(500).json({error:err});
       });
});

module.exports = router;
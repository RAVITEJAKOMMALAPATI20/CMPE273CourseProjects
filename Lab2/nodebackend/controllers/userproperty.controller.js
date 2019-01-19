const {Property,Properties,UserTrips} =require("../models/Property_Model");
var {mongoose} = require('../utils/mongoose');
const user_dao=require("../dao/user.dao");
const multer =require('multer');
const path =require('path');
const bcrypt = require('bcrypt');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var fs = require('fs');



exports.getproperties = async (req,res)=>{
    console.log("Inside Get Properties"+req.query.state);
    Property.find({state:req.query.state},function (err,data) {
        if(err){
            res.sendStatus(200).end();
        }else {
            console.log(data);
            res.json({properties:data});
        }
    })
}


exports.bookproperty = async (req,res)=>{
    //console.log("Inside Get Properties "+JSON.stringify(req.body));
    let usertrip=new UserTrips({
        username:req.body.user.username,
        propertyid:req.body.property.propertyid,
        property:req.body.property
    })

    Property.update({propertyid:req.body.property.propertyid},{$set :{isavailable:false}},{ upsert : true },function (err,data) {
        if(err){

        }else {
            console.log(JSON.stringify(data));

        }

    })
    usertrip.save().then((user)=>{
        UserTrips.find({username:username},function (err,data) {
        if(err){
            console.log(err);
        }else {
           // console.log(JSON.stringify(data));
            res.json({properties:data})
        }
        });
        },(err)=>{
        console.log(err)
        res.sendStatus(400).end();
    })
}


exports.gettrips = async (req,res)=>{
    console.log("Inside Get Properties"+req.query.username);

    UserTrips.find({username:req.query.username},function (err,data) {
        if(err){

        }else {
            console.log(JSON.stringify(data));
            res.json({usertrips:data});
        }

    })

}

exports.updateproperty = async (req,res)=>{
    console.log("Inside User SignUP"+req.body);
    let user =new User({
        firstname:req.body.firstName,
        lastname:req.body.lastName,
        username : req.body.userName,
    });
    await bcrypt.hash(req.body.password, 10, function( err, bcryptedPassword) {
        if(err){
            console.log("Error wile hashing");
        }else{
            user.password=bcryptedPassword;
            user.save().then((user)=>{
                console.log("User added : ",user);
                res.sendStatus(200).end();
            },(err)=>{
                console.log("Error Signing Up User");
                res.sendStatus(400).end();
            })
        }
    });
}

exports.deleteproperty = async (req,res)=>{
    console.log("Inside User SignUP"+req.body);
    let prperty =new User({
        firstname:req.body.firstName,
        lastname:req.body.lastName,
        username : req.body.userName,
    });
    await bcrypt.hash(req.body.password, 10, function( err, bcryptedPassword) {
        if(err){
            console.log("Error wile hashing");
        }else{
            user.password=bcryptedPassword;
            user.save().then((user)=>{
                console.log("User added : ",user);
                res.sendStatus(200).end();
            },(err)=>{
                console.log("Error Signing Up User");
                res.sendStatus(400).end();
            })
        }
    });
}
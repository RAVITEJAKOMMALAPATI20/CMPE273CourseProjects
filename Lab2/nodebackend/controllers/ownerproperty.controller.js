const {Property,Properties} =require("../models/Property_Model");
var {mongoose} = require('../utils/mongoose');
const user_dao=require("../dao/user.dao");
const multer =require('multer');
const path =require('path');
const bcrypt = require('bcrypt');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var fs = require('fs');



exports.createnewproperty = async (req,res)=>{
    console.log("Inside Create Property"+req.body);
    let property = new Property({
        propertyid:req.body.property.propertyid
    });
    console.log(req.body.property.propertyid);
    Properties.findOneAndUpdate(
        { username:req.body.username },
        { $push: { properties: property }},
        {new:true},
        function (error, row) {
            if (error) {

            } if(row==null) {
                let properties =new Properties({
                    username:req.body.username,
                });
                console.log(property.propertyid);
                properties.properties.push(property);
                properties.save().then((row)=>{
                    console.log("Property Created : ",row);
                    res.json({
                        isPropertiesAvailable:true,
                        properties:row.properties
                    });
                },(err)=>{
                    console.log("Error Signing Up User");
                    res.sendStatus(400).end();
                })
            }else
            {
                console.log("here");
                console.log(row);
                res.json({
                    isPropertiesAvailable:true,
                    properties:row.properties});
            }
        });
}


exports.getproperties = async (req,res)=>{
    console.log("Inside Get Properties "+req.query);

    Properties.findOne({ username:req.query.username}, function (err, row) {
        if (err){
console.log(err);
        }else if(row == null){
            console.log("No data Present");
            res.json({isPropertiesAvailable:false})
        }else{
            console.log("Available Properties"+row.properties);
            res.json(
                {
                    isPropertiesAvailable:true,
                    properties:row.properties
                })
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


exports.saveproperty = async (req,res)=>{
    console.log("Inside Save Property"+req.body.property.propertyid);

    let property  =new Property({
        propertyid:req.body.property.propertyid,
        isavailable:req.body.property.isavailable,
        displayproperty:req.body.property.displayproperty,
        state:req.body.property.location.state,
        location:req.body.property.location,
        details:req.body.property.details,
        price:req.body.property.price,
        availability:req.body.property.availability
    });

    Property.update({propertyid:property.propertyid},{$set:{
            propertyid:req.body.property.propertyid,
            isavailable:req.body.property.isavailable,
            displayproperty:req.body.property.displayproperty,
            state:req.body.property.location.state,
            location:req.body.property.location,
            details:req.body.property.details,
            price:req.body.property.price,
            availability:req.body.property.availability
        }},{ upsert : true },function (err,row) {
        if (err) {
        }else{
            console.log("Successfully added to Property Table")
        }
    });
    Properties.update({username:req.body.username},{$set:{
            username:req.body.username,
            properties:req.body.properties
        }},{ upsert : true },function (err,ownerproperties) {
        if (err) {
        }else{
            return res.json({properties:ownerproperties.properties,property:property});
        }
    });
   /* property.save().then((property)=>{
        res.json({property:property});
    },(err)=>{
        console.log(err);
        res.sendStatus(400).end();
    });*/

//
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
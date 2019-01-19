const {Message} =require("../models/Messaging_Model");
var {mongoose} = require('../utils/mongoose');
const user_dao=require("../dao/user.dao");
const multer =require('multer');
const path =require('path');
const bcrypt = require('bcrypt');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var fs = require('fs');




exports.sendmessage = async (req,res)=>{
    console.log("Inside Send Messages"+req.body.messagedata);
    Message.find({tousername:req.body.messagedata.tousername},function (err,data) {
        if(err){
            res.sendStatus(200).end();
        }else {
            console.log(data);
            res.json({properties:data});
        }

    })
}
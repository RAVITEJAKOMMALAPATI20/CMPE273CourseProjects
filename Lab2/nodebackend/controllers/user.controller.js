const {User} =require("../models/User_Model");
var {mongoose} = require('../utils/mongoose');
const user_dao=require("../dao/user.dao");
const multer =require('multer');
const path =require('path');
const bcrypt = require('bcrypt');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var fs = require('fs');

const jwt = require('jsonwebtoken');
//var kafka = require('../kafka/client');

//Profile Pic Upload
//Ok
const  uploadprofilepic = multer({dest:'utils/imagessource/profilepics'});


const storageImage =multer.diskStorage({
    destination:'utils/imagessource/profilepics',
    filename:function (req,file,cb) {
        console.log("User Name"+req.body.username);
        cb(null,req.body.username+path.extname(file.originalname));
    }
});

const upload = multer({
    storage:storageImage
}).single('profilepic');


exports.usersignup = async (req,res)=>{
console.log(req.body);
/*`if(req.body==undefined||req.body==null){
    res.end();
}
    kafka.make_request('user_signup',req.body, function(err,results){
        console.log('In result');
        console.log(results);
        if (err){
            console.log("Inside err");
            res.json({
                status:"error",
                msg:"System Error, Try Again."
            })
        }else{
            console.log("Inside else");
            res.json({
                user:results
            });
            res.end();
        }

    });*/

    console.log("Inside User SignUP"+req.body);
    let user =new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username : req.body.username,
        usertype:req.body.usertype
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

exports.loginuser = (req,res)=> {
    console.log("Inside User Login"+req.body+res.body);//
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({
        username:req.body.username
    }, function(err,user){
        if (err) {
            res.code = "400";
            res.value = "The email and password you entered did not match our records. Please double-check and try again.";
            console.log(res.value);
            res.sendStatus(400).end();
        } else if(user){
            bcrypt.compare(req.body.password, user.password, function(err, doesMatch){
                if (doesMatch){
                    console.log("User Found")
                    user.password=req.body.password;

                    jwt.sign({user:user},"raviteja",(err,token)=>{
                        res.json({ user: user,
                        token:token
                        });
                    });
                }else{
                    res.sendStatus(400).end();
                }
            });
        }
    })
}
exports.updateuserprofile =(req,res)=>{
    jwt.verify(req.token,'raviteja',(err,authData)=>{
        if(err){
            console.log("Error in authentication");
            res.sendStatus(403);
        }else {

            User.findByIdAndUpdate(
                req.body._id,
                {$set: {firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        aboutme: req.body.aboutme,
                        mycity: req.body.mycity,
                        school: req.body.school,
                        hometown: req.body.hometown,
                        languages: req.body.languages,
                        gender: req.body.gender,
                        phonenumber: req.body.phonenumber}
                },
                {new: true},
                function (err,user) {
                    if(err){
                        res.code = "400";
                        res.value = "Error In updating";
                        console.log(res.value);
                        res.sendStatus(400).end();
                    }else if(user){
                        console.log(user);
                        res.json({ user: user });
                    }
                }


            )

        }
    })
    console.log("Inside updateuserprofile"+req.body);

}
exports.getprofilepic= async(req,res)=>{
    //Logging Required Data
    console.log("Inside Get Profile Pic User Name:-"+req.query.username);

    //Request validation
    if(req.query.username===undefined||req.query.username===null||req.query.username===""){
        res.json({ profilepic: "" });
    }

    //Data Accessing
    let profilepic=await getbase64String('/Users/ravitejakommalapati/WebstormProjects/HomeAwayServer/utils/imagessource/profilepics/'+req.query.username+'.jpg');

    //Sending Response
    if(profilepic==""){
    console.log("Exiting Get Profile Pic No Profile Picture Found");
    res.json({ profilepic: profilepic });
    }else{
    console.log("Exiting Get Profile Pic User Name:-"+req.query.username);
    res.json({ profilepic: profilepic });
    }

}
exports.imageupload=  (req,res)=>{
    //Logging Required Data
    console.log("Inside ImageUpload Method:-");

     upload(req,res,async function(err) {
        if(err) {
             res.end("Error uploading file");
        }else{
            console.log(req)
            let profilepic=await getbase64String('../utils/imagessource/profilepics/'+req.body.username+'.jpg');
            res.json({ profilepic: profilepic });

        }

    });
}
function getbase64String(file){
    let bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string and returning it back
    return new Buffer(bitmap).toString('base64');
}

let validaterequest=(req)=>{
    if(req.body.firstname!=undefined&&req.body.lastname!=undefined&&req.body.email!=undefined&&req.body.password!=undefined){
    return true;
    }
    return false;
}
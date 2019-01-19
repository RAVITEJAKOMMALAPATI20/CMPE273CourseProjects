const User =require("../models/User_Model");

const user_dao=require("../dao/user.dao");

const multer =require('multer');

const path =require('path');



const storageImage =multer.diskStorage({
    destination:'utils/imagessource/propics',
    filename:function (req,file,cb) {
        console.log(req.body);
        cb(null,file.fieldname+path.extname(file.originalname));
    }
});
const upload = multer({
    storage:storageImage
}).single('profilepic');


exports.usersignup = (req,res)=>{
    let user =new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email : req.body.email,
        password :req.body.password
        });
    console.log("In user controller usersignup:"+user);
    let response=user_dao.signupuser(user);
    res.send(200);
}

exports.loginuser = (req,res)=> {
    let user = new User({
        email: req.body.username,
        email: req.body.password
    });
    let response = user_dao.loginuser(user,(err,response)=> {
        if (response == true) {
            res.cookie('cookie', "admin", {maxAge: 900000, httpOnly: false, path: '/'});
            req.session.user = user;
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.end("Successful Login");
        } else{
            res.send(202);
    }}
    );
}

exports.imageupload=(req,res)=>{
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file");
        }else{
          //  res.json({'profilepic':[utils/imagessource/propics/profilepic.jpg]});
            if(req.file==undefined){

            }else{
                res.sendFile('/Users/ravitejakommalapati/WebstormProjects/HomeAwayServer/utils/imagessource/propics/profilepic.jpg')
            }
        }

    });
}

let validaterequest=(req)=>{
    if(req.body.firstname!=undefined&&req.body.lastname!=undefined&&req.body.email!=undefined&&req.body.password!=undefined){
    return true;
    }
    return false;

}
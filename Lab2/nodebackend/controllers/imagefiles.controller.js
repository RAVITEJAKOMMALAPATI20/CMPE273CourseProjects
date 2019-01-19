const {User} =require("../models/User_Model");
var {mongoose} = require('../utils/mongoose');
const user_dao=require("../dao/user.dao");
const multer =require('multer');
const path =require('path');
const bcrypt = require('bcrypt');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var fs = require('fs');
var uniqid = require('uniqid');




const storageImage =multer.diskStorage({
    destination:function (req, file, cb) {
        let dir = 'utils/imagessource/propertypics/'+req.body.username;
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        dir=dir+'/'+req.body.propertyid;
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename:async function (req,file,cb) {
       let filename= await uniqid(req.body.username);
        cb(null,filename+path.extname(file.originalname));
    }
});

const upload = multer({
    storage:storageImage
}).array('propertypics',50);


exports.propimagesupload =  (req,res)=>{
    console.log("Inside Property Image Upload Method:-");
    upload(req,res,async function(err) {
        if(err) {
            res.end("Error uploading file");
        }else{
            let basedirectory =req.files[0].destination;
            fs.readdir(basedirectory, async (err, files) => {
                let resdata={};
                resdata.propertypics=[];
                let propertypic="";

                for(let i=0;i<files.length;i++){
                    propertypic=await getbase64String(basedirectory+'/'+files[i]);
                    resdata.propertypics.push(propertypic);
                }
                res.json({ resdata: resdata });

            });
        }

    });
}

function getbase64String(file){
    let bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string and returning it back
    return new Buffer(bitmap).toString('base64');
}
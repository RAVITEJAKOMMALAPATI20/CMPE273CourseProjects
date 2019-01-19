const ownerproperty_dao=require("../dao/ownerproperty.dao");
const multer =require('multer');
const path =require('path');

const mysql_connection =require("../utils/connection");
const property_insertquery ="insert into property SET ?";
const property_selectquery ="select * from property where username =? ";
const property_updatequery = "update property SET propertydata  =? where username = ?";
let property ={
        id:"qqqqq",
        address:"jjjjj",
        pricing:"",
        details:"",
}

const sign_up_query ="insert into property SET ?";

const storageImage =multer.diskStorage({
   destination:'../utils/imagessource',
    filename:function (req,file,cb) {

       cb(null,file.fieldname+Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({
storage:storageImage
}).array('homeimages',10);



exports.saveProperty = (req,res)=>{

    let  connection = mysql_connection.openconnection();
    console.log(req.session.user);
    console.log("Hi I am here");
    let user =req.session.user;
    let username="ravi";
    connection.query(property_selectquery,username,function (err,result) {
        let data={};
        if(err){

        }else if(result.length==0){
            data={
                username:"ravi",
                propertydata:JSON.stringify([property])
            }
            connection.query(property_insertquery,data,function (err,result) {
                if(err){
                    console.log("error"+err);
                }
                else{
                    console.log("Inserted new property");
                    res.send(200);
                    mysql_connection.closeconnection(connection);
                }
            });

        }
        else{
            var obj = JSON.parse(result[0].propertydata);
            obj.push(property);
            jsonStr = JSON.stringify(obj);
            console.log(jsonStr);
             data={
                 username:"ravi",
                 propertydata:jsonStr,
            }
            connection.query(property_updatequery,[jsonStr,"ravi"],function (err,result) {
                if(err){
                    console.log("error"+err);
                }
                else{
                    console.log("Inserted new property");
                    res.send(200);
                    mysql_connection.closeconnection(connection);
                }
            });

        }

    });
}

exports.updateProperty = (req,res)=> {
let val ="";
let id=id;
let properties=JSON.parse(val);
let propertyarr  =properties.filter(property=>property.id==id);
property =propertyarr[0];
    property.address=req.address;
}

exports.uploadImages =(req,res)=>{
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file");
        }
        res.json("Files is uploaded");
    });
}
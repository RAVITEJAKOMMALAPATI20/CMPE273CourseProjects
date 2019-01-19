var express = require('express');
var router = express.Router();
const  ownerproperty_controller =require("../controllers/ownerproperty.controller");


router.post("/uploadphotos",ownerproperty_controller.uploadImages);
router.post("/saveproperty",ownerproperty_controller.saveProperty);
router.post("/updateproperty",ownerproperty_controller.updateProperty);
function newproperty(){

}
module.exports =router;
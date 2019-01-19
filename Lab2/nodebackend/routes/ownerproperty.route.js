var express = require('express');
var router = express.Router();
const  ownerproperty_controller =require("../controllers/ownerproperty.controller");
const  imagefiles_controller =require("../controllers/imagefiles.controller");




//Image Controller Routes
router.post("/uploadpropertypics",imagefiles_controller.propimagesupload);

router.post("/createnewproperty",ownerproperty_controller.createnewproperty);
router.get("/getproperties",ownerproperty_controller.getproperties);
router.post("/saveproperty",ownerproperty_controller.saveproperty);
module.exports =router;
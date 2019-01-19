const express = require('express');
const router = express.Router();
const  user_controller =require("../controllers/user.controller");
const  imagefiles_controller =require("../controllers/imagefiles.controller");

const  user_property_controller =require("../controllers/userproperty.controller");
const  message_controller =require("../controllers/message.controller");
const  jwttokenutil =require("../utils/jwttokenutil");
//User Controller Routes

router.post("/signup",user_controller.usersignup);
router.post("/login",user_controller.loginuser);
router.post("/updateuserprofile",user_controller.updateuserprofile);
router.post("/profilepicUpload",user_controller.imageupload);
router.get("/getprofilepic",user_controller.getprofilepic);
router.get("/getproperties",jwttokenutil.verifyToken,user_property_controller.getproperties);
router.post("/bookproperty",user_property_controller.bookproperty);
router.get("/gettrips",user_property_controller.gettrips);

router.post("/sendmessage",message_controller.sendmessage)



router.get("/p",jwttokenutil.verifyToken,user_controller.loginuser);
//Image Controller Routes
//router.get("/uploadpropertypic",imagefiles_controller.propimagesupload);
module.exports =router;
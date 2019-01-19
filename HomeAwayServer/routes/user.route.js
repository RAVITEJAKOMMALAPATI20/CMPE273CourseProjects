const express = require('express');
const router = express.Router();
const  user_controller =require("../controllers/user.controller");





//New Root
router.post("/signup",user_controller.usersignup);
router.post("/login",user_controller.loginuser);
router.post("/profilepicUpload",user_controller.imageupload)

module.exports =router;
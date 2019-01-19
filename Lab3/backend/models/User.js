const mongoose = require('mongoose');

let UserSchema = {
    firstname: {type: String, required: true, max: 32},
    lastname: {type: String, required: true,max: 32},
    username:  {type: String, required: true,  max: 32},
    password: {type: String, required: true, max: 32},
    aboutme: {type: String, required: false, max: 300},
    mycity: {type: String, required: false,max: 32},
    school: {type: String, required: false, max: 32},
    hometown: {type: String, required: false,max: 32},
    languages: {type: String, required: false, max: 10},
    gender: {type: String, required: false,max: 5},
    phonenumber: {type: String, required: false, max: 15},
    usertype: {type: String, required: false, max: 15},
    istoOnline:  {type: Boolean, required: false},
};



var User =mongoose.model('User', UserSchema);
module.exports.User = User;
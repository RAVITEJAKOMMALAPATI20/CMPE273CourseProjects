const mongoose = require('mongoose');

let MessageSchema = {
    fromusername: {type: String, required: true, max: 32},
    tousername: {type: String, required: true,max: 32},
    messagesinqueue: {type: String, required: true, max: 32},
    totalchat: {type: String, required: false, max: 300},
};



var Message =mongoose.model('Message', MessageSchema);
module.exports = {Message};
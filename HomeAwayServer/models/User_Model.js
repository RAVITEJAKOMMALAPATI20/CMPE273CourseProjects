const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstname: {type: String, required: true, max: 32},
    lastname: {type: String, required: true,max: 32},
    email:  {type: String, required: true,  max: 32},
    password: {type: String, required: true, max: 32},
});


// Export the model

module.exports = mongoose.model('User', UserSchema);
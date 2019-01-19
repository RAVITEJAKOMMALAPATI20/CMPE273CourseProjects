var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://admin:password1@ds237713.mlab.com:37713/homeaway',{ useNewUrlParser: true });

module.exports = {mongoose};
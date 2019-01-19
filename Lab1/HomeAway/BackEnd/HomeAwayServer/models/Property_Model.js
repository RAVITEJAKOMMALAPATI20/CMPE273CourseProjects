const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PropertySchema = new Schema({
    location: {type: String, required: false, max: 32},
    details: DetailsSchema,
});


let DetailsSchema = new Schema({
    heading: {type: String, required: false, max: 1000},
    propertydescription: {type: String, required: false,max: 32},
    propertytype:  {type: String, required: false,  max: 32},
    bedrooms: {type: String, required: false, max: 32},
    accomodation:{type: String, required: false, max: 32},
    bathrooms:{type: String, required: false, max: 32},
});

let AvailabilitySchema =
    new Schema({
        address:{type: String, required: false, max: 32},
    });

// Export the model

module.exports.Property = mongoose.model('Property', PropertySchema);
module.exports.Details = mongoose.model('Details', DetailsSchema);
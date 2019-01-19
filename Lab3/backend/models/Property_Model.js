const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const Schema = mongoose.Schema;

let DetailsSchema = new Schema({
    heading: {type: String, required: false, max: 1000},
    propertydescription: {type: String, required: false,max: 1000},
    propertytype:  {type: String, required: false,  max: 32},
    bedrooms: {type: String, required: false, max: 2},
    accomodation:{type: String, required: false, max: 2},
    bathrooms:{type: String, required: false, max: 2},
});

let LocationSchema = new Schema({
    country: {type: String, required: false, max: 32},
    streetaddress: {type: String, required: false,max: 32},
    unit:  {type: String, required: false,  max: 32},
    city: {type: String, required: false, max: 32},
    state:{type: String, required: false, max: 32},
    zipcode:{type: String, required: false, max: 10},
});
let AvailabilitySchema =
    new Schema({
        address:{type: String, required: false, max: 32},
    });
let PriceSchema =
    new Schema({
        address:{type: String, required: false, max: 32},
    });
let Property =new Schema({
    propertyid:{type: String, required: false,  max: 32},
    isavailable:{type: Boolean, required: false},
    displayproperty:{type: Boolean, required: false},
    state:{type: String, required: false,  max: 32},
    owner:{type: String, required: false,  max: 32},
    location:LocationSchema,
    details:DetailsSchema,
    price:PriceSchema,
    availability:AvailabilitySchema
});

let UserTripsSchema =new Schema({
    username:{type: String, required: false,max: 32},
    propertyid:{type: String, required: false,  max: 32},
    property:Property,
    startdate:{type: String, required: false,  max: 32},
    enddate:{type: String, required: false,  max: 32},
    owner:{type: String, required: false,max: 32}
})
let PropertySchema = new Schema({
    username:{type: String, required: false,max: 32},
    propertyid:{type: String, required: false,unique : true,  max: 32},
    property:Property,
    city:{type: String, required: false,max: 32}
});
module.exports.UserTrips = mongoose.model('UserTrips', UserTripsSchema);
module.exports.Properties = mongoose.model('OwnerProperties', PropertySchema);
module.exports.Property = mongoose.model('Property', Property);
module.exports.DetailsSchema = mongoose.model('DetailsSchema', DetailsSchema);
module.exports.LocationSchema = mongoose.model('LocationSchema', LocationSchema);
module.exports.AvailabilitySchema = mongoose.model('AvailabilitySchema', AvailabilitySchema);
module.exports.PriceSchema = mongoose.model('PriceSchema', PriceSchema);
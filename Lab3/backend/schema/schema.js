const {ApolloServer , gql} = require('apollo-server')
const {makeExecutableSchema} =require('graphql-tools')
//const {resolvers} =require('./resolver')
var {User} =require('../models/User')
var {Property,Properties,LocationSchema,DetailsSchema,UserTrips} =require('../models/Property_Model')
const graphql = require('graphql');




const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = graphql;


const UserType=new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type:GraphQLString},

        firstname:  {type:GraphQLString},
    lastname: {type:GraphQLString},
    username:   {type:GraphQLString},
    password: {type:GraphQLString},
    aboutme: {type:GraphQLString},
    mycity:  {type:GraphQLString},
    school: {type:GraphQLString},
    hometown: {type:GraphQLString},
    languages:  {type:GraphQLString},
    gender: {type:GraphQLString},
    phonenumber:  {type:GraphQLString},
    usertype: {type:GraphQLString},
    istoOnline: {type:GraphQLBoolean},
    })
})




const DetailsType=new GraphQLObjectType({
    name:'Details',
    fields:()=>({
        heading:  {type:GraphQLString},
        propertydescription: {type:GraphQLString},
        propertytype:   {type:GraphQLString},
        bedrooms: {type:GraphQLString},
        accomodation: {type:GraphQLString},
        bathrooms:  {type:GraphQLString},
    })
})


const LocationType=new GraphQLObjectType({
    name:'Location',
    fields:()=>({
        country:  {type:GraphQLString},
        streetaddress: {type:GraphQLString},
        unit:   {type:GraphQLString},
        city: {type:GraphQLString},
        state: {type:GraphQLString},
        zipcode:  {type:GraphQLString},
    })
})



const PropertyType=new GraphQLObjectType({
    name:'Property',
    fields:()=>({
        propertyid:  {type:GraphQLString},
        isavailable: {type:GraphQLBoolean},
        displayproperty:{type:GraphQLBoolean},
        owner:   {type:GraphQLString},
        city: {type:GraphQLString},
        location: {type:LocationType},
        details:  {type:DetailsType},
    })
})


const OwnerProperty=
    new GraphQLObjectType({
        name:'OwnerProperty',
        fields:()=>({
            propertyid:  {type:GraphQLString},
            property: {type:PropertyType},
            username:{type:GraphQLBoolean},
            city:{type:GraphQLString},
        })
    })



const UserTripsType=new GraphQLObjectType({
    name:'Trips',
    fields:()=>({
        username:  {type:GraphQLString},
        propertyid: {type:GraphQLString},
        property:   {type:PropertyType},
        enddate: {type:GraphQLString},
        startdate:{type:GraphQLString},


    })
})

const RootQuery =new GraphQLObjectType({


    name:"RootQueryType",
    fields:{
        users:{
            type:UserType,
            args:{},
            resolve(parent,args){
//
            }
        },
        loginuser:{
            type:UserType,
            args:{
                username:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            resolve(parent,args){
                console.log("Entered Login Admin");
                return User.findOne({username:args.username,password:args.password},function (err,user) {
                    if(err){
                        console.log(err)
                    }
                    if(user!=null){
                        console.log("Owner Login Success and Owner User" +
                            "" +
                            "Name is =="+user.username)
                        console.log(JSON.stringify(user))
                        return user
                    }
                })
            }
        },
        loginadmin:{
            type:UserType,
            args:{
                username:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            resolve(parent,args){
                console.log("Entered Login Admin");
                return User.findOne({username:args.username,password:args.password},function (err,user) {
                    if(err){
                        console.log(err)
                    }
                    if(user!=null){
                        console.log("Owner Login Success and User Name is =="+user.username)
                        console.log(JSON.stringify(user))
                        return user
                    }
                })
            }
        },
        getownerproperties:{
            type:new GraphQLList(OwnerProperty),
            args:{
                username:{type:GraphQLString}
            },
            resolve(parent,args){
                console.log(args.username);
                return Properties.find({username:args.username},function (err,properties) {
                    if(err){
                        console.log(err)
                    }
                    if(properties!=null){
                        console.log("Entered Owner get properties")

                        console.log(properties)
                        return properties
                    }
                })
            }
        },
        getbookedpropertiesowner:{
            type:new GraphQLList(UserTripsType),
            args:{
                owner:{type:GraphQLString}
            },
            async resolve(parent,args){
                console.log(args.owner);
                return await UserTrips.find({owner:args.owner},function (err,trips) {
                    if(err){
                        console.log(err)
                    }
                    if(trips!=null){
                        return trips
                    }
                    console.log(trips);
                })
            }
        },
        gettripsuser:{
            type:new GraphQLList(UserTripsType),
            args:{
                username:{type:GraphQLString}
            },
            async resolve(parent,args){
                console.log(args.owner);
                return await UserTrips.find({username:args.username},function (err,trips) {
                    if(err){
                        console.log(err)
                    }
                    if(trips!=null){

                        return trips
                    }
                    console.log(trips);
                })
            }
        },
        searchproperty:{
            type:new GraphQLList(OwnerProperty),
            args:{
                city:{type:GraphQLString}
            },
            async resolve(parent,args){
                console.log(args.owner);
                return await Properties.find({city:args.city},function (err,trips) {
                    if(err){
                        console.log(err)
                    }
                    if(trips!=null){

                        return trips
                    }
                    console.log(trips);
                })
            }
        }
    }
})
const Mutation =new GraphQLObjectType({
    name:"Mutation",
    fields:{
        signinuser:{
            type:UserType,
            args: {
                firstname:  {type:GraphQLString},
                lastname: {type:GraphQLString},
                username:   {type:GraphQLString},
                password: {type:GraphQLString},
                usertype: {type:GraphQLString},
            },
            resolve(parent,args){
                let user =new User({
                    firstname:args.firstname,
                    lastname:args.lastname,
                    password:args.password,
                    username:args.username,
                    usertype:args.usertype
                })
                console.log("Entered Owner Signup"+JSON.stringify(user));
                console.log("Sign Up Success");
                return user.save();
            }
        },
        signinowner:{
            type:UserType,
            args: {
                firstname:  {type:GraphQLString},
                lastname: {type:GraphQLString},
                username:   {type:GraphQLString},
                password: {type:GraphQLString},
                usertype: {type:GraphQLString},
            },
            resolve(parent,args){
                let user =new User({
                    firstname:args.firstname,
                    lastname:args.lastname,
                    password:args.password,
                    username:args.username,
                    usertype:args.usertype
                })
                console.log("Entered Owner Signup"+JSON.stringify(user));
                console.log("Sign Up Success");
                return user.save();
            }
        },
        updateuser:{
            type:UserType,
            args: {
                id:{type:GraphQLString},
                firstname:  {type:GraphQLString},
                lastname: {type:GraphQLString},
                username:   {type:GraphQLString},
                password: {type:GraphQLString},
                aboutme: {type:GraphQLString},
                mycity:  {type:GraphQLString},
                school: {type:GraphQLString},
                hometown: {type:GraphQLString},
                languages:  {type:GraphQLString},
                gender: {type:GraphQLString},
                phonenumber:  {type:GraphQLString},
                usertype: {type:GraphQLString},
                istoOnline: {type:GraphQLBoolean},
            },
            resolve(parent,args){
                console.log("--------Entered Update Profile---------")

               return User.findByIdAndUpdate(
                    args.id,
                    {$set: {firstname: args.firstname,
                            lastname: args.lastname,
                            aboutme: args.aboutme,
                            mycity: args.mycity,
                            school: args.school,
                            hometown: args.hometown,
                            languages: args.languages,
                            gender: args.gender,
                            phonenumber: args.phonenumber}
                    },
                    {new: true},
                    function (err,user) {

                        if(err){
                            return null;
                        }else if(user){
                            console.log(JSON.stringify(user))
                            return user;
                        }
                    }
                )
            }
        },
        addnewpropert:{
            type:OwnerProperty,
            args:{
                username:{type:GraphQLString},
                propertyid:{type:GraphQLString},
                isavailable: {type:GraphQLBoolean},
                displayproperty:{type:GraphQLBoolean},
                heading:  {type:GraphQLString},
                propertydescription: {type:GraphQLString},
                propertytype:   {type:GraphQLString},
                bedrooms: {type:GraphQLString},
                accomodation: {type:GraphQLString},
                bathrooms:  {type:GraphQLString},
                country:  {type:GraphQLString},
                streetaddress: {type:GraphQLString},
                unit:   {type:GraphQLString},
                city: {type:GraphQLString},
                state: {type:GraphQLString},
                zipcode:  {type:GraphQLString},
            },
            resolve(parent,args){
                let details=new DetailsSchema({
                    heading: args.heading ,
                    propertydescription: args.propertydescription,
                    propertytype:  args.propertytype ,
                    bedrooms: args.bedrooms,
                    accomodation:args.accomodation ,
                    bathrooms:args.bathrooms ,
                })
                let location=new LocationSchema({
                    country: args.country ,
                    streetaddress:args.streetaddress ,
                    unit:  args.unit ,
                    city:args.city ,
                    state: args.state,
                    zipcode: args.zipcode ,
                })
                let propery =new Property({
                    propertyid: args.propertyid ,
                    isavailable: args.isavailable,
                    displayproperty:args.displayproperty,
                    owner:   args.username,
                    city: args.city,
                    location:location,
                    details:details
                })
                let properties =new Properties({
                    username:args.username,
                    propertyid:args.propertyid,
                    property: propery,
                    city:args.city
                })
                return properties.save();
            }
        },
        loginuser:{
            type:UserType,
            args:{
                username:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            resolve(parent,args){
                console.log(args.username+""+args.password);
                return User.findOne({username:args.username,password:args.password},function (err,user) {
                    if(err){
                        console.log(err)
                    }
                    if(user!=null){
                        console.log(user.firstname)
                        return user
                    }
                    console.log(user);
                })
            }
        }
        ,
        bookproperty:{
            type:new GraphQLList(UserTripsType),
            args:{
                username:{type:GraphQLString},
                propertyid:{type:GraphQLString},
                startdate:{type:GraphQLString},
                enddate:{type:GraphQLString}
            },
            async resolve(parent,args){
                console.log(args.username);
                let trip=new UserTrips({
                    username:args.username,
                    propertyid:args.propertyid,
                    startdate: args.startdate,
                    enddate:args.enddate,

                })
                let resproperty=await
                    Properties.find({propertyid:args.propertyid},function (err,properties) {
                        if(err){
                            console.log(err)
                        }
                        if(properties!=null){
                           console.log(JSON.stringify(properties));
                            return properties
                        }
                    })
                console.log("Booked New Property");
                console.log(JSON.stringify(resproperty));
                trip.property=resproperty[0].property;
                trip.owner=resproperty[0].property.owner;
                await trip.save();
                return UserTrips.find({username:args.username},function (err,trips) {
                    if(err){
                        console.log(err)
                    }
                    if(trips!=null){
                        return trips
                    }
                    console.log(trips);
                })
            }
        }
    }
})

module.exports=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})

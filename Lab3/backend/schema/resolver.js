var {User} =require('../models/User')
const {Property,Properties} =require("../models/Property_Model");
var crypto = require('crypto');

const  db ={
    users:[

        {
            id:"1",
            username:'ravi@1993',
            name:"ravi"
        }
    ]
}

const resolvers={
    Query:{
       
        users:async (root,args,context,info)=>{
                    return User.find();
        },
                user:(root,args,context,info)=>db.users.find(user=>user.id===args.id),
    },
    Mutation:{
        addUser:(root,{username,name},contect,info)=>{
            const user={
                id:crypto.randomBytes(10).toString('hex'),
                email,
                name
            }
            db.users.push(user);
            return user;
        },
        createnewproperty:async (root,{username,property},contect,info)=>{

            let newproperty =new Properties({
                username:username,
                property:property,
                propertyid:crypto.randomBytes(10).toString('hex')
            });
            newproperty.save();
            return newproperty;

        }
    }
}

module.exports.resolvers=resolvers;
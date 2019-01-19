
const  db ={
    users:[

        {
            id:"1",
            email:'ravi@1993',
            name:"ravi"
        }
    ]
}

const rootValue={
    users:()=>db.users,
    user:args=>db.users.find(user=>user.id===args.id),
    addUser:({email,name})=>{
        const user={
            id:crypto.randomBytes(10).toString('hex'),
            email,
            name
        }
        db.users.push(user);
        return user;
    }


}


module.exports =rootValue

const mysql_connection =require("../utils/connection")
const sign_up_query ="insert into user SET ?";
const login_query ="select * from user where email =? AND pwd = ?";

exports.signupuser =(user)=>{
    let  connection =mysql_connection.openconnection();
console.log("In User.dao Module  sign up user method");
    let dbUser={
            firstname:user.firstname,
            lastname:user.lastname,
            email : user.email,
            pwd :user.password
    };
    //const signup_query ="insert into HomeAway.user (firstname,lastname,email,pwd) values ()";
    connection.query(sign_up_query,dbUser,function (err,result) {
        if(err){
            console.log("error"+err);
        }
        else{
            console.log("Inserted new user");
        }
    });
     mysql_connection.closeconnection(connection);

}

exports.loginuser=(user,callback)=>{
    let userfound=false;
    let  connection = mysql_connection.openconnection();
console.log("In User.dao Module login user method");
       let email = user.email;
       let pwd = user.password;
   userfound= connection.query(login_query,[email,pwd],function (err,result) {
        if(err){
            console.log("error"+err);
        }
        else{

            console.log("User found"+result);
            callback(null,true);
        }
    });
   console.log("Hiii in ther"+userfound);
    return  userfound = true;
   // mysql_connection.closeconnection(connection);
}
let mysql      = require('mysql');
const config =require("./configurations");



let database_credentials =config.databasecredentials;



exports.openconnection=()=>{
    let connection = mysql.createConnection(database_credentials);
    return connection;
}
exports.closeconnection=(connection)=>{
    console.log("Made A Connection");
   try {
       connection.end();
   }catch (e) {
       console.log(e);
   }
   //connection.end();
}

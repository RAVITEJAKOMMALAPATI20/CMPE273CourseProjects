

exports.verifyToken =(req,res,next)=>{
const  tokenbearer = req.headers['authorization'];
if(typeof tokenbearer != 'undefined'){
    const result = tokenbearer.split(' ');
    const token = result[1];
    req.token =token;
    console.log("done"+token);
    next();
}else {
    console.log("For bidden Request");
    res.sendStatus(403);
}
}


const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

const authMiddleware = (req, res, next) => {
    const authHeaders = req.headers.authorization;

    if(!authHeaders || !authHeaders.startsWith('Bearer ')){
        return res.status(403).json({
            message: "Access denied"
        });
    }

    const token = authHeaders.split(" ")[1]

    try{
        const decoded = jwt.verify(token, JWT_SECRET)

        if(decoded.userId){
            req.userId = decoded.userId
            next();
        }else{
            return res.status(403).json({
                message: "Access Denied"
            })
        }
        
    }catch(e){
        console.log(e);
        return res.status(403).json({
            message: "Access Denied"
        });
    }
};

module.exports = {
    authMiddleware
}
import jwt from "jsonwebtoken";

const authMiddleware = async(req,res,next) => {
    const {token}=req.headers;
    if(!token) {
        return res.json({success: false, message: "Not authorised, login again"});
    }

    try {
        const decoded_token=jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.body.userId=decoded_token.id;
        next();
    }
    catch(error) {
        console.log(error);
        res.json({success: false, message: "Error with JWT"});
    }
}

export default authMiddleware;
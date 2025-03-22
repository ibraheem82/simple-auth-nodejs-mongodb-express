import Admin from "../models/Admin.js";
import verifyToken from "../utils/verifyToken.js";

const islogin = async(req, res, next) => {
    const headerObj = req.headers;
    const token = headerObj?.authorization?.split(" ")[1];
    console.log(token);
    const verifiedToken = verifyToken(token);

    if(verifiedToken){
        try {
            const user = await Admin.findById(verifiedToken.id).select("name email role")
            
                // save the user into the req.obj
                req.adekunle = user;
                next();
        } catch (error) {
            // Handle potential errors during database lookup.
            next(error)
            
        }
    } else{
        const err = new Error("Invalid / Token Expired");
        next(err);
    }
}

export default islogin;
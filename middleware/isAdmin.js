import Admin from "../models/Admin.js";

const isAdmin = async(req, res, next) => {
    try{
        const userId = req?.adekunle?._id; // get the logged in use ID.
        const adminFound = await Admin.findById(userId);


        if(adminFound?.role === 'admin') {
            next();
        } else{
            next(new Error('Access Denied, admin only 🔐')); // User is not an admin
        }
    } catch(error) {
        next(error);
    }
};


export default isAdmin;
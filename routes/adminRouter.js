import express from "express";
const adminRouter = express.Router();
import { loginAdminCtrl, registerAdminCtrl } from "../controllers/adminController.js";
import { signUpValidator, signinValidator } from "../validators/auth.js";
import validate from "../validators/validate.js";
import islogin from "../middleware/isLogin.js";


adminRouter.post("/register", signUpValidator, validate, registerAdminCtrl);
adminRouter.post("/login", signinValidator, validate, loginAdminCtrl);


export default adminRouter;
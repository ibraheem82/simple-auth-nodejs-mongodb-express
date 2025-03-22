import express from "express";
const studentRouter = express.Router();
import isAdmin from "../middleware/isAdmin.js";
import { adminRegisterStudent } from "../controllers/StudentsCtrl.js";
import islogin from "../middleware/isLogin.js";


studentRouter.post("/admin/register", islogin, isAdmin, adminRegisterStudent);


export default studentRouter;
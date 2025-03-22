import dotenv from "dotenv";

dotenv.config();
import express from 'express';
import dbConnect from "../config/dbConnect.js";
import { globalErrHandler } from "../middleware/globalErrHandler.js";
import adminRouter from "../routes/adminRouter.js";
import studentRouter from "../routes/studentRouter.js";
dbConnect();

const app = express();
app.use(express.json());
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/students", studentRouter);





app.use(globalErrHandler);
export default app;

import bcrypt from "bcryptjs";

import asyncHandler from "express-async-handler";
import Student from "../models/Student.js";





export const adminRegisterStudent = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    const student = await Student.findOne({email});

    if (student) {
        res.status(400);
        throw new Error("Student already exists");
    }



    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const studentRegistered = await Student.create({
        email,
        password: hashedPassword,
    });


    res.status(201).json({
        message: "Student created successfully",
        data: studentRegistered,
        status: "success"
    });

});
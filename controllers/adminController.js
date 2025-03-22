import Admin from "../models/Admin.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";



export const registerAdminCtrl = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;
    const adminExists = await Admin.findOne({email});

    if (adminExists) {
        res.status(400);
        throw new Error("Admin already exists");
    }



    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
        name,
        email,
        password: hashedPassword,
    });


    res.status(201).json({
        message: "Admin created successfully",
        admin,
    });

});

export const loginAdminCtrl = asyncHandler(async (req, res) => { 
    const {email, password} = req.body;
    const admin = await Admin.findOne({email});

    if (!admin) {
        res.status(400);
        throw new Error("Invalid email or password");
    }

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);

    if (!isPasswordCorrect) {
        res.status(400);
        throw new Error("Invalid email or password");
    }

    res.status(200).json({
        message: "Admin logged in successfully",
        adekunle: generateToken(admin._id) // generate token based on users ID.
    });
});


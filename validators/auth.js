import {check} from 'express-validator';


export const signUpValidator = [
    check("name").notEmpty().withMessage("Name is required"),

    check("email") // ayomide 
        .isEmail()
        .withMessage("Invalid email")
        .notEmpty()
        .withMessage("Email is required"),


    check('password')
        .isLength({min: 8})
        .withMessage('Password must be at least 8 characters long')
        .matches(/\d/)
        .withMessage('Password must contain at least one number')
        .matches(/[a-zA-Z]/)
        .withMessage('Password must contain at least one letter')
        
]



export const signinValidator = [
    check("email")
           .isEmail()
           .withMessage("Invalid email")
           .notEmpty()
           .withMessage("Email is required."),
           check("password").notEmpty().withMessage("Password is required")

]
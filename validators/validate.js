import { validationResult } from "express-validator";



const validate = (req, res, next) => {
    const errors = validationResult(req); // validate based on all requests, that is being used on.
    const mappedErrors = {};


    if(Object.keys(errors.errors).length === 0) {  // if there is no error go to the next middleware or route.
        next();
    } else{

        errors.errors.map((error) => {
            mappedErrors[error.path] = error.msg
        });

        res.status(422).json({
            errors: mappedErrors,
        });
    }
  }

export default validate;
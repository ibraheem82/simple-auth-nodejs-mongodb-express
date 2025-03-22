import jwt from "jsonwebtoken";


const generateToken = (id) => {
    const jwtExpiration = parseInt(process.env.JWT_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000;
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: jwtExpiration,
    });
};

export default generateToken;

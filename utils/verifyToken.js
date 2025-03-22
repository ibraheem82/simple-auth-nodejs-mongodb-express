import jwt from 'jsonwebtoken';

// token: The token to be verified.
// decoded is the actual user in which we sign the token with, meaning the user actual data.
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // If an error occurs during verification (e.g., invalid signature, expired token), the function returns false to indicate an invalid token.
    if (err) {
      return false;
    } else { // If the verification is successful, the function returns the decoded payload of the token, which typically contains user information or other relevant data.
      return decoded;
    }
  });
};

export default verifyToken;
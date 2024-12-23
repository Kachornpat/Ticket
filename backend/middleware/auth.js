const jwt = require("jsonwebtoken");
const config = require("../config/config.json");

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error(" Not authorized!!");
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, config.token)
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated!');
        error.statusCode = 401;
        throw error;
    }
    req.isLoggedIn = true;
    req.userId = decodedToken.userId;
    req.email = decodedToken.email;
    next();

}
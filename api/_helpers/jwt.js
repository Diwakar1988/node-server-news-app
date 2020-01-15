const expressJwt = require('express-jwt');
const appConfig = require('../../app.config.json');

module.exports = jwt;

function jwt() {
    const { token_secret } = appConfig;
    return expressJwt({ secret:token_secret }).unless({
        path: [
            // public routes that don't require authentication
            '/api/v1/users/signup',
            '/api/v1/users/login'
        ]
    });
}
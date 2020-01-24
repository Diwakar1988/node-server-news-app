const tokenService = require('./access-token');
const userService = require('../v1/users/users.service');

module.exports = (req, res, next) => {
    // Express headers are auto converted to lowercase
    let token = req.headers['x-access-token'] || req.headers['authorization']; 
    // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }
  
    if (token) {
      try {
        const decoded = tokenService.verify(token);
        const user = userService.getUser(decoded.id);
        if(user){
          req.user = user;
          next();
        } else {
          sendError(res, 401, 'User with this access token does not exist');
        }
      } catch(err){
        sendError(res, 401, err.message);
      }
    } else {
        sendError(res, 401, 'Auth token is required');
    }
  };
  
  const sendError = (res, code, message) => {
    res.status(code).json({code, message});
  };
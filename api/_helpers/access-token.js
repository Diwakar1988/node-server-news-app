const jwt = require('jsonwebtoken');


const  verify = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET);
}
const create = (user) => {
    const token = jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn:process.env.TOKEN_EXPIRY});
    return token;
}

module.exports = {
  verify : verify,
  create : create,
};
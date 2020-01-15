const appConfig = require('../../../../app.config.json');
const jwt = require('jsonwebtoken');

const createUser = async ({name,email,password}) => {
    let users = require('../models/users');
    let user = users.find(u => u.email == email);
    if(!user)
    {
        //user not found so create user
        user = {id:users.length+1,name,email,password};
        users.push(user);
    }
    user.token_updated_at = Date.now();
    const token = jwt.sign({email:user.email, token_updated_at:user.token_updated_at}, appConfig.token_secret);
    return {...user, password:undefined, token};
}

module.exports = createUser
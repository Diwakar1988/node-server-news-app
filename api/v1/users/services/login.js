const login = (body) => {
    const tokenService = require('../../../_helpers/access-token');
    const users = require('../models/users');
    const user = users.find(u => u.email == body.email && u.password == body.password);
    if(user){
        const token = tokenService.create({id:user.id});
        return {...user, password:undefined, token, isAdmin: undefined};
    }
    return null;
}

module.exports = login
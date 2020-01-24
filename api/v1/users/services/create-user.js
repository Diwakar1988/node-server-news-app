const createUser = (body) => {
    let users = require('../models/users');
    let user = users.find(u => u.email == body.email);
    if(!user)
    {
        //user not found so create user
        user = {id:users.length+1,name:body.name,email:body.email,password:body.password};
        //save user in db
        users.push(user);
    }
    return {...user, password:undefined};
}

module.exports = createUser
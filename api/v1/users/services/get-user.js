const getUser = (id) => {
    const users = require('../models/users');
    const user = users.find(u => u.id == id);
    return user;
}

module.exports = getUser
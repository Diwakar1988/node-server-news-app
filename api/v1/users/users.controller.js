const userService = require('./users.service');

module.exports = {
    login,
    logout,
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};

function login(req, res, next) {
    const body = req.body;
    const user = userService.login(body);
    if (user) {
        res.send(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

function createUser(req, res, next) {
    const body = req.body;
    const user = userService.createUser(body);
    res.send(user);
}
function getAllUsers(req, res, next) {
    const user = req.user;
    if (user.isAdmin){
        const users = userService.getAllUsers();
        res.send(users);    
    } else {
        res.status(401).json({ message: 'Admin access needed' });
    }
}
function getUser(req, res, next) {
    res.send({...req.user, password: undefined, isAdmin: undefined});
}
function updateUser(req, res, next) {

}
function deleteUser(req, res, next) {

}
function logout(req, res, next) {

}
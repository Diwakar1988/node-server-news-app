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

}
function logout(req, res, next) {

}
function createUser(req, res, next) {
    const body = req.body;
    userService.createUser(body)
    .then(user => {
        res.send(user);
    })
    .catch(err=>{
        res.send(err);
    })
}
function getAllUsers(req, res, next) {
    userService.getAllUsers()
    .then(users => {
        res.send(users);
    })
    .catch(err=>{
        res.send(err);
    })
}
function getUser(req, res, next) {
    const id = req.params.id;
    userService.getUser(id)
    .then(user => {
        if(user)
        {
            res.send(user);
        } 
        else
        {
            res.status(404).json({ message: 'User not found' })
        }
    })
    .catch(err=>{
        res.send(err);
    })
}
function updateUser(req, res, next) {

}
function deleteUser(req, res, next) {

}
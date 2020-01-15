const express = require('express');
const router = express.Router();
const usersController = require('./users.controller');

router.get('/:id', usersController.getUser);
router.get('/', usersController.getAllUsers);
 
router.post('/signup', usersController.createUser);
router.post('/login', usersController.login);
router.post('/logout', usersController.logout);

router.put('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
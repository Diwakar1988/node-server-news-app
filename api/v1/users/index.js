const express = require('express');
const router = express.Router();
const usersController = require('./users.controller');
const authorizationHandler = require('../../_helpers/authorization-handler');


router.get('/me',authorizationHandler, usersController.getUser);
router.get('/', authorizationHandler, usersController.getAllUsers);
/**
 * @apiVersion 1.0.0
 * @api {POST} /v1/users/signup create a unique user
 * @apiName CreateUser
 * @apiGroup User
 * @apiHeaderExample {json} Header-Example:
    {
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
 * @apiParamExample {json} Request-Example:
    {
        "name":"Name of the user at least 3characters long",
        "email":"Valid email id of the User used for login",
        "password":"Password of the user"
    }

 * @apiSuccessExample {json} Success-Response:
    {
        "id": 114,
        "name":"Name of the user at least 3characters long",
        "email":"Valid email id of the User used for login"
    }
 */
router.post('/signup', usersController.createUser);
/**
 * @apiVersion 1.0.0
 * @api {POST} /v1/users/login authenticate a user
 * @apiName Login
 * @apiGroup User
 * @apiHeaderExample {json} Header-Example:
    {
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
 * @apiParamExample {json} Request-Example:
    {
        "email":"Valid email id of the User used for login",
        "password":"Password of the user"
    }
 * @apiSuccessExample {json} Success-Response:
    {
        "id": 114,
        "name":"Name of the user at least 3characters long",
        "email":"Valid email id of the User used for login",
        "token":"access token for further api requests"
    }
 */
router.post('/login', usersController.login);
router.post('/logout',authorizationHandler, usersController.logout);

router.put('/', authorizationHandler, usersController.updateUser);

router.delete('/', authorizationHandler, usersController.deleteUser);

module.exports = router;
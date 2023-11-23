/**
 * Express Router for handling user-related routes.
 * @module Routes/User
 */
const express = require('express');
const userController =require('../Controllers/userController');
const { insertUserValidation, updateUserValidation } = require('../validations/user-validator');

/**
 * Express router to handle user-related routes.
 * @type {object}
 * @const
 * @namespace userRouter
 */
const router = express.Router();

/**
 * Route to get user by ID.
 * @name get/userById
 * @function
 * @memberof module:Routes/User~userRouter
 * @inner
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.get('/getUserById', userController.getUserByIdController);

/**
 * Route to get all users.
 * @name get/allUsers
 * @function
 * @memberof module:Routes/User~userRouter
 * @inner
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.get('/getAllUsers', userController.getAllUsersController);

/**
 * Route to get all users.
 * @name get/allUsers
 * @function
 * @memberof module:Routes/User~userRouter
 * @inner
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.post('/addUser', insertUserValidation,  userController.addUserController);

/**
 * Route to update an existing user.
 * @name patch/updateUser
 * @function
 * @memberof module:Routes/User~userRouter
 * @inner
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.patch('/updateUser', updateUserValidation, userController.updateUserController);

/**
 * Route to update an existing user.
 * @name patch/updateUser
 * @function
 * @memberof module:Routes/User~userRouter
 * @inner
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.delete('/deleteUser', userController.deleteUserController);

/**
 * Exports the userRouter for use in other modules.
 * @name module:Routes/User~userRouter
 * @type {object}
 */
module.exports = router;

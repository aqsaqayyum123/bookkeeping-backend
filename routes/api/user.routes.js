const bodyParser = require('body-parser').json();
const express = require('express');
const router = express.Router();
const auth = require('../../middelware/auth');

const userController = require('../../controllers/user.controller');
/* User Router */
/**
 * @swagger
 * tags:
 *  name: Users
 *  description: All user routes
 */
/**
 * @swagger
 * /signup:
 *  post:
 *    tags: [Users]
 *    description: User to signup
 *    responses:
 *      '200':
 *        description: user signup successfully
 */
router.post('/signUp', bodyParser, userController.signUp);
/* User Router */
/**
 * @swagger
 * /logIn:
 *  post:
 *    tags: [Users]
 *    description: User to login
 *    responses:
 *      '200':
 *        description: user login successfully
 */
router.post('/logIn', bodyParser, userController.logIn);
/* User Router */
/**
 * @swagger
 * /detail:
 *  get:
 *    tags: [Users]
 *    description: User detail
 *    responses:
 *      '200':
 *        description: user detail fetched successfully
 */
router.get('/detail', bodyParser, auth, userController.detail);
/* User Router */
/**
 * @swagger
 * /updateProfile:
 *  put:
 *    tags: [Users]
 *    description: User profile api
 *    responses:
 *      '200':
 *        description: user profile updated successfully
 */
router.put('/updateProfile', bodyParser, auth, userController.updateProfile);
/* User Router */
/**
 * @swagger
 * /changePassword:
 *  put:
 *    tags: [Users]
 *    description: User change Password api
 *    responses:
 *      '200':
 *        description: user password changed successfully
 */
router.put('/changePassword', bodyParser, auth, userController.changePassword);
/* User Router */
/**
 * @swagger
 * /deleteUser:
 *  delete:
 *    tags: [Users]
 *    description: User delete api
 *    responses:
 *      '200':
 *        description: user deleted successfully
 */
router.delete('/deleteUser', bodyParser, auth, userController.deleteUser);
router.get('/getUser', bodyParser, userController.getUser);
module.exports = router;

const express = require('express')
const router = new express.Router()
const loginController = require('../../controller/userVerification/login.controller')

//input- email,password

/**
 * Login User and generate token for user to use web
 * @route POST /login
 * @group Login - Login user
 * @param {loginInput.model} loginInput.body.required - This function takes Email and Password as input login the user, generate token for each login and return status code and result of operation.
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 200 - login successfull
 * @returns {Response.model} 422 - Password is incorrect
 * @returns {Response.model} 400 - This Email is not registered! Please signup first
 * @returns {loginInput.model}  default - Unexpected error
 * @security JWT
 */
router.post('/login', loginController)

module.exports = router
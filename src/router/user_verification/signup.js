const express = require('express')
const router = new express.Router()
const bcrypt = require('bcryptjs')
const signupController = require('../../controller/userVerification/signup.controller')


//input- email,password,confirmPassword,firstName, lastName


/**
 * Signup Function
 * @route POST /signup
 * @group signup - Signup Operation
 * @param {SignupInput.model} SignupInput.body.required - This function takes Email, Password, ConfirmPassword, FirstName, LastName as input and return status code and result of operation..
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 201 - Signup Successful
 * @returns {Response.model} 406 - This Email already have Account
 * @returns {SignupInput.model}  default - Unexpected error
 * @security JWT
 */
router.post('/signup', signupController)
module.exports = router
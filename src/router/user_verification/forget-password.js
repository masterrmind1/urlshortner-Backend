const express = require('express')
const router = new express.Router()
const auth = require('../../middleware/auth')
const shortId = require("shortid");
urlCode = shortId.generate();
const forgetPasswordController = require('../../controller/userVerification/fogetPassword.controller')

//input- email

/**
 * This function send reset-password link to email.
 * @route POST /forget-password
 * @group Reset Password - Reset Password of user
 * @param {ForgetPasswordInput.model} ForgetPasswordInput.body.required - This function takes Email as input, sends email and return status code and result of operation.
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 201 - Please check email for a link to reset password
 * @returns {Response.model} 400 - Unknown Error
 * @returns {Response.model} 403 - You do not have account, please signup first
 * @returns {Response.model} 422 - Please enter Valid EmailId
 * @returns {Response.model} 500 - Server Error
 * @returns {ForgetPasswordInput.model}  default - Unexpected error
 * @security JWT
 */
router.post('/forget-password', auth, forgetPasswordController)

module.exports = router
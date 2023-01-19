const express = require('express')
const router = new express.Router()
const auth = require('../../middleware/auth')
const resetPasswordController = require('../../controller/userVerification/reserPassword.controller')

//input - email, currentPassword, newPassword

/**
 * Reset-Password Function using Email id
 * @route PATCH /reset-password/{id}
 * @group Reset-Password - Reset Password Operation
 * @param {string} id.path.required user's id
 * @param {resetPasswordInput.model} resetPasswordInput.body.required - This function takes Email, CurrentPassword, NewPassword as input and return status code and result of operation.
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 200 - Password updated successfully
 * @returns {Response.model} 401 - Please enter correct current password
 * @returns {Response.model} 409 - no user exist with this id
 * @returns {Response.model} 500 - Server Error
 * @returns {resetPasswordInput.model}  default - Unexpected error
 * @security JWT
 */
router.patch('/reset-password/:id', auth, resetPasswordController.resetPasswordControllerWithEmail)



/**
 * Reset-Password Function using URL id
 * @route PATCH /reset/{urlId}
 * @group Reset-Password - Reset Password Operation
 * @param {string} urlId.path.required Url Id
 * @param {resetPasswordInput.model} resetPasswordInput.body.required - This function takes Email, CurrentPassword, NewPassword as input and return status code and result of operation.
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 200 - Password updated successfully
 * @returns {Response.model} 401 - Please enter correct current password
 * @returns {Response.model} 409 - no user exist with this id
 * @returns {Response.model} 401 - Link has been expired
 * @returns {Response.model} 500 - Server Error
 * @returns {resetPasswordInput.model}  default - Unexpected error
 * @security JWT
 */
router.patch('/reset/:urlId', resetPasswordController.resetPasswordControllerWithUrlId)

module.exports = router
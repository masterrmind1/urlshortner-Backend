const express = require('express')
const router = new express.Router()
const getUserFromIdController = require('../../controller/getUserDataController/getUserFromId.controller')


//input- urlId

/**
 * This function returns user data from database.
 * @route POST /getUserFromId
 * @group Get User Data - Reset Password of get user's info using id
 * @param {getUserFromIdInput.model} getUserFromIdInput.body.required - This function takes user's Id as input and return status code and All User data from database.
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 200 - receive users data
 * @returns {Response.model} 404 - no user found
 * @returns {Response.model} 422 - Id is required
 * @returns {Response.model} 500 - Server Error
 * @returns {getUserFromIdInput.model}  default - Unexpected error
 * @security JWT
 */
router.post('/getUserFromId', getUserFromIdController)

module.exports = router
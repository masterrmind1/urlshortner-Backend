const express = require('express')
const router = new express.Router()
const auth = require('../../middleware/auth')
const getUserDataController = require('../../controller/getUserDataController/getUserData.controller')
    //input-email
    /**
     * This function returns user data from database.
     * @route POST /getUser
     * @group Get User Data - Reset Password of get user's info using id
     * @param {getUserDataInput.model} getUserDataInput.body.required - This function takes user's email id as input and return status code and All User data from database.
     * @produces application/json application/xml
     * @consumes application/json application/xml
     * @returns {Response.model} 200 - received users data
     * @returns {Response.model} 404 - no user found
     * @returns {Response.model} 422 - user's email is required
     * @returns {Response.model} 500 - Server Error
     * @returns {getUserDataInput.model}  default - Unexpected error
     * @security JWT
     */
router.post('/getUser', auth, getUserDataController)

module.exports = router
const express = require('express')
const router = new express.Router()
const getUsersAllUrlsController = require('../../controller/generateUrlController/getUsersAllUrls.controller')

//input-emailid
/**
 * This function generates short url and returns it.
 * @route POST /home/allUrls
 * @group generateUrl - generate short url for each short url
 * @param {getAllUrlInput.model} getAllUrlInput.body.required - This function takes user's email id and long url as input and return short url which is being generated and status code.
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 200 -Returns All shortened urls  of user.
 * @returns {Response.model} 400 -you dont have shortened any url yet!
 * @returns {Response.model} 500 - Server Error
 * @returns {getAllUrlInput.model}  default - Unexpected error
 * @security JWT
 */
router.post('/home/allUrls', getUsersAllUrlsController)

module.exports = router
const express = require('express')
const router = new express.Router()
const auth = require('../../middleware/auth')
const generateUrlController = require('../../controller/generateUrlController/generateURL.controller')
const redirectUrlController = require('../../controller/generateUrlController/redirectUrl.controller')

//input should be longUrl and email
/**
 * This function generates short url and returns it.
 * @route POST /home/generate_URL
 * @group generateUrl - generate short url for each short url
 * @param {generateUrlInput.model} generateUrlInput.body.required - This function takes user's email id and long url as input and return short url which is being generated and status code.
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 200 -Returns generated Short url
 * @returns {Response.model} 204 -you already have shortened this URL
 * @returns {Response.model} 401 - You have already shortened 10 URL's
 * @returns {Response.model} 500 - Server Error
 * @returns {generateUrlInput.model}  default - Unexpected error
 * @security JWT
 */
router.post('/home/generate_URL', generateUrlController)



router.get('/p/:code', redirectUrlController);

module.exports = router
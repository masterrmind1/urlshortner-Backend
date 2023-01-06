const express = require('express')
const router = new express.Router()

const auth = require('../../middleware/auth')
const generateUrlController = require('../../controller/generateUrlController/generateURL.controller')
const redirectUrlController = require('../../controller/generateUrlController/redirectUrl.controller')
    //input should be longUrl and email
router.post('/home/generate_URL', auth, generateUrlController)
router.get('/:code', redirectUrlController);

module.exports = router
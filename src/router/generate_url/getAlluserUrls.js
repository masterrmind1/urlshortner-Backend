const express = require('express')
const router = new express.Router()
const urlSchema = require('../../db/urlDatabase')
const auth = require('../../middleware/auth')
const getUsersAllUrlsController = require('../../controller/generateUrlController/getUsersAllUrls.controller')

//input-emailid
router.post('/home/allUrls', auth, getUsersAllUrlsController)

module.exports = router
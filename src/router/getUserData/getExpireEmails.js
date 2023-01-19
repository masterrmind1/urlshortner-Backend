const express = require('express')
const router = new express.Router()
const getExpireController = require('../../controller/getUserDataController/getExpiremails.controller')
const rateLimiter = require('../../utils/rateLimiter')
router.post('/getExpiredUser', getExpireController)

module.exports = router
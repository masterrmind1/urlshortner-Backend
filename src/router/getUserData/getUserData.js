const express = require('express')
const router = new express.Router()
const auth = require('../../middleware/auth')
const getUserDataController = require('../../controller/getUserDataController/getUserData.controller')
    //input-emailid
router.post('/getUser', auth, getUserDataController)

module.exports = router
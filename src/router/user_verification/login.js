const express = require('express')
const router = new express.Router()
const loginController = require('../../controller/userVerification/login.controller')
    //inp- email, password
router.post('/login', loginController)

module.exports = router
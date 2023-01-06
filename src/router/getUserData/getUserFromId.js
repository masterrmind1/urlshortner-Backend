const express = require('express')
const router = new express.Router()
const getUserFromIdController = require('../../controller/getUserDataController/getUserFromId.controller')
    //input- Id
router.post('/getUserFromId', getUserFromIdController)

module.exports = router
const express = require('express')
const router = new express.Router()
const userSchema = require('../../db/userDatabase')
const bcrypt = require('bcryptjs')
const signupController = require('../../controller/userVerification/signup.controller')
    //"email","password","confirmPassword","firstName","lastName"
router.post('/signup', signupController)
module.exports = router
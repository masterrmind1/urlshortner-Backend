const express = require('express')
const router = new express.Router()
const userSchema = require('../../db/userDatabase')
const resetPasswordSchema = require('../../db/reset-passwordDb')
var nodemailer = require('nodemailer');
const shortId = require("shortid");
urlCode = shortId.generate();
const forgetPasswordController = require('../../controller/userVerification/fogetPassword.controller')

router.post('/forget-password', forgetPasswordController)

module.exports = router
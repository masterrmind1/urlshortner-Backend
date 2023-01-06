const { ObjectId } = require('mongodb')
const express = require('express')
const router = new express.Router()
const auth = require('../../middleware/auth')
const resetPasswordController = require('../../controller/userVerification/reserPassword.controller')

//input - email, currentPassword, newPassword
router.patch('/reset-password/:id', auth, resetPasswordController.resetPasswordControllerWithEmail)

router.patch('/reset/:urlId', resetPasswordController.resetPasswordControllerWithUrlId)

module.exports = router
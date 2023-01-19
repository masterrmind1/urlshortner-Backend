const express = require('express')
const router = new express.Router()
const logoutController = require('../../controller/userVerification/logout.controller')
    // router.post('/logout', auth, async(req, res) => {
    //     try {
    //         console.log(req.user)
    //         req.user.tokens = req.user.tokens.filter((token) => {
    //             return token.token != req.token
    //         })
    //         await req.user.save()
    //         res.send("logged out")
    //     } catch (e) {
    //         res.status(500).send(e)
    //     }

// })

//input- email

/**
 * Logout User from all devices
 * @route PATCH /logoutAll/{id}
 * @group Logout - Logout user
 * @param {string} id.path.required user's id
 * @param {logoutInput.model} logoutInput.body.required - This function takes Email as input and delete all the token for this perticular user ie. logout user from all devices and return status code and result of operation.
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 201 - logged out from all devices
 * @returns {Response.model} 500 - Server Error
 * @returns {logoutInput.model}  default - Unexpected error
 * @security JWT
 */
router.patch('/logoutAll/:id', logoutController)

module.exports = router
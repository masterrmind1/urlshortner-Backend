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
router.patch('/logoutAll/:id', logoutController)

module.exports = router
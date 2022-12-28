const express = require('express')
const router = new express.Router()
const User = require('../db/model')
const auth = require('../middleware/auth')

router.post('/getUser', auth, async(req, res) => {
    try {
        const userData = await User.userSchema.findOne({ email: req.body.email.toLowerCase() })
        if (userData) {
            res.send(userData)
        } else {
            res.send("no user found")
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router
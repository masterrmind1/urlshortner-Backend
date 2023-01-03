const express = require('express')
const router = new express.Router()
const User = require('../../src/db/model')

const auth = require('../../src/middleware/auth')

router.post('/getUserFromId', auth, async(req, res) => {
    try {
        const userData = await User.userSchema.findById({ _id: req.body.id })
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
const express = require('express')
const router = new express.Router()
const User = require('../db/model')
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth')

router.post('/logout', auth, async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send("logged out")
    } catch (e) {
        res.status(500).send(e)
    }

})

router.patch('/logoutAll/:id', async(req, res) => {
    try {
        const user = await User.userSchema.findByIdAndUpdate(req.params.id, { tokens: [] }, { new: true, runValidators: true })
        res.status(201).send('logged out from all')
    } catch (e) {
        res.send(e).status(500)
    }
})

module.exports = router
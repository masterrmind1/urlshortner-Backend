const express = require('express')
const router = new express.Router()
const User = require('../db/model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
router.get('/login', auth, async(req, res) => {
    const userData = await User.userSchema.findOne({ email: 'rajput2007@gmail.com' })
    res.send({ login: 'login' })
})
router.get('/abc', auth, async(req, res) => { res.send('abc') })
router.post('/login', async(req, res) => {
    try {
        const userData = await User.userSchema.findOne({ email: req.body.email.toLowerCase() })
        if (userData) {
            const userPassword = userData.password
            const isMatch = await bcrypt.compare(req.body.password, userPassword)
            const token = await userData.generateAuthToken()
                // console.log('token', token)
                // res.cookie("jwt", token, {
                //     expires: new Date(Date.now() + 6000000),
                //     httpOnly: true,
                //     secure: true
                // });
                // console.log('mmm', `${req.cookies}`)
            if (isMatch) {
                res.send({ result: 'login successfully', status: 200 }).status(200)
            } else {
                res.send({ result: "Password is incorrect", status: 400 }).status(400)
            }
        } else {
            res.send({ result: 'This Email is not registered! Please signup first', status: 400 })
        }

    } catch (er) {
        res.status(500).send(er)
    }
})

module.exports = router
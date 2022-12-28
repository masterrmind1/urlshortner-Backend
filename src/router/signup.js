const express = require('express')
const router = new express.Router()
const User = require('../db/model')
const bcrypt = require('bcryptjs')
router.get('/signup', async(req, res) => {
    res.send('signup')
})

router.post('/signup', async(req, res) => {
    if (req.body.password == req.body.confirmPassword) {
        try {
            await User.userSchema.findOne({ email: req.body.email.toLowerCase() }).then((users) => {
                if (users == null) {
                    const userEmail = req.body.email.toLowerCase()
                    const userData = new User.userSchema({
                        email: req.body.email.toLowerCase(),
                        password: bcrypt.hashSync(req.body.password, 6),
                        firstName: req.body.firstName,
                        lastName: req.body.lastName
                    })
                    userData.save()
                    res.status(201).send({ result: 'Signup done', status: 201 })
                } else {
                    res.send({ result: 'This Email already have a accout', status: 406 })
                }
            })
        } catch (er) {
            console.log(er.message, er.properties)
            res.status(500).send(er)
        }
    } else {
        res.send('Password and confirmed Password should be same')
    }
})

module.exports = router
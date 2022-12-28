const express = require('express')
const router = new express.Router()
const User = require('../db/model')
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth')
const { MongoClient, ObjectId, Db } = require('mongodb')
const id = new ObjectId()
router.get('/reset-password', async(req, res) => {
    res.send('reset-password')
})
router.patch('/reset-password/:id', auth, async(req, res) => {
    try {
        const getUser = await User.userSchema.findOne({ _id: req.params.id })
        if (getUser) {
            const userCurrentPassword = getUser.password
            const ifPasswordSame = await bcrypt.compare(req.body.currentPassword, userCurrentPassword)
                //console.log(ifPasswordSame)
            if (ifPasswordSame) {
                const user = await User.userSchema.findByIdAndUpdate(req.params.id, { email: getUser.email, password: await bcrypt.hash(req.body.newPassword, 6) }, { new: true, runValidators: true })
                res.send({ result: "Password updated successfully", status: 200 })
            } else {
                res.send()
            }
        } else {
            res.send({ result: 'no user exist with this id', status: 409 })
        }
    } catch (er) {
        res.status(500).send(er)
    }
})
module.exports = router
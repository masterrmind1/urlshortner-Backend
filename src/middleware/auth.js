const jwt = require('jsonwebtoken')
const User = require('../db/model')

const auth = async(req, res, next) => {

    try {
        const userData = await User.userSchema.findOne({ email: req.body.email.toLowerCase() })
        const token = await userData.generateAuthToken()
        const decode = jwt.verify(token, 'urlshortnerabcdefghijklmnopqrstuvwxyz')
        const user = await User.userSchema.findOne({ _id: decode._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Authenticate first' })
        console.log(e)
    }
}

module.exports = auth
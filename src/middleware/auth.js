const jwt = require('jsonwebtoken')
const userSchema = require('../db/userDatabase')

const auth = async(req, res, next) => {
    let userData;
    try {
        if (req.body.id) {
            userData = await userSchema.findById({ _id: req.body.id })
        } else if (req.body.email) {
            userData = await userSchema.findOne({ email: req.body.email.toLowerCase() })
        }
        const token = await userData.generateAuthToken()
        const decode = jwt.verify(token, 'urlshortnerabcdefghijklmnopqrstuvwxyz')
        const user = await userSchema.findOne({ _id: decode._id, 'tokens.token': token })
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
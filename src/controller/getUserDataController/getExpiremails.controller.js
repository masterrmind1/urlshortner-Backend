const getExpireEmails = require('../../db/reachedLimitEmails')
const getExpireController = async(req, res) => {
    try {
        if (req.body) {
            const expireEmails = await getExpireEmails.findOne({ email: req.body.email.toLowerCase() })
            res.send(expireEmails)
        } else {
            res.send({ result: "please send user email", status: 400 })
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

module.exports = getExpireController
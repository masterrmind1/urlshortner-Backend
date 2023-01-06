const userSchema = require('../../db/userDatabase')
const getUserDataController = async(req, res) => {
    try {
        if (req.body) {

            const userData = await userSchema.findOne({ email: req.body.email.toLowerCase() })
            if (userData) {
                res.send(userData)
            } else {
                res.send("no user found")
            }
        } else {
            res.send("please send user email")
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

module.exports = getUserDataController
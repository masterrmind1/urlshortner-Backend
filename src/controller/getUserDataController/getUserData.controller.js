const userSchema = require('../../db/userDatabase')
const getUserDataController = async(req, res) => {
    try {
        if (req.body) {

            const userData = await userSchema.findOne({ email: req.body.email.toLowerCase() })
            if (userData) {
                res.send(userData).status(200)
            } else {
                res.send("no user found").status(404)
            }
        } else {
            res.send("user email is required").status(422)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}

module.exports = getUserDataController
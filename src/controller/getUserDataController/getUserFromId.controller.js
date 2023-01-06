const userSchema = require('../../db/userDatabase')

const getUserFromIdController = async(req, res) => {
    try {
        if (req.body) {
            const userData = await userSchema.findById({ _id: req.body.urlId })
            if (userData) {
                res.send(userData)
            } else {
                res.send("no user found")
            }
        } else {
            res.send("please send urlId")
        }
    } catch (e) {
        res.status(500).send(e)
    }
}
module.exports = getUserFromIdController
const userSchema = require('../../db/userDatabase')
const getUserFromIdController = async(req, res) => {
    try {
        if (req.body) {
            const userData = await userSchema.findById({ _id: req.body.Id })
            if (userData) {
                res.send(userData).status(200)
            } else {
                res.send("no user found").status(404)
            }
        } else {
            res.send("Id is required").status(422)
        }
    } catch (e) {
        res.status(500).send(e)
    }
}
module.exports = getUserFromIdController
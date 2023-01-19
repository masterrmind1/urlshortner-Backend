const userSchema = require('../../db/userDatabase')

const logoutController = async(req, res) => {
    try {
        if (req.params.id) {
            const user = await userSchema.findByIdAndUpdate(req.params.id, { tokens: [] }, { new: true, runValidators: true })
            res.status(201).send('logged out from all devices')
        }
    } catch (e) {
        res.send(e).status(500)
    }
}

module.exports = logoutController
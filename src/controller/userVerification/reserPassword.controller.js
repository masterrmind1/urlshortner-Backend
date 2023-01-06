const userSchema = require('../../db/userDatabase')
const resetPasswordSchema = require('../../db/reset-passwordDb')
const bcrypt = require('bcryptjs')

//input - email, currentPassword, newPassword
const resetPasswordControllerWithEmail = async(req, res) => {
    try {
        const getUser = await userSchema.findOne({ _id: req.params.id })
        if (getUser) {
            const userCurrentPassword = getUser.password
            const ifPasswordSame = await bcrypt.compare(req.body.currentPassword, userCurrentPassword)
            console.log(ifPasswordSame)
            if (ifPasswordSame) {
                const user = await userSchema.findByIdAndUpdate(req.params.id, { email: getUser.email, password: await bcrypt.hash(req.body.newPassword, 6) }, { new: true, runValidators: true })
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
}

const resetPasswordControllerWithUrlId = async(req, res) => {
    try {
        if (req.params.urlId) {
            const getResetPsswordData = await resetPasswordSchema.findOne({ urlId: req.params.urlId })
            console.log(req.params)
            if (getResetPsswordData) {
                const getUser = await userSchema.findOne({ email: getResetPsswordData.email })
                if (getUser) {
                    const userCurrentPassword = getUser.password
                    const ifPasswordSame = await bcrypt.compare(req.body.currentPassword, userCurrentPassword)
                    console.log(ifPasswordSame)
                    if (ifPasswordSame) {
                        const user = await userSchema.findOneAndUpdate({ email: getResetPsswordData.email }, { email: getUser.email, password: await bcrypt.hash(req.body.newPassword, 6) }, { new: true, runValidators: true })
                        res.send({ result: "Password updated successfully", status: 200 })

                    } else {
                        res.send({ result: "Please enter correct current password", status: 400 })
                    }
                } else {
                    res.send({ result: 'no user exist with this id', status: 409 })
                }
            } else {
                res.send({ result: 'Link has been expired', status: 401 })
            }
        }
    } catch (er) {
        res.status(500).send(er)
    }
}

module.exports = { resetPasswordControllerWithEmail, resetPasswordControllerWithUrlId }
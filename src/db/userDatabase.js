const mongoose = require('mongoose');
const validator = require('validator')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'ENV_FILENAME' });

mongoose.connect('mongodb://127.0.0.1:27017/UrlShortner', {
    useNewUrlParser: true
})

const User = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Please Enter valid Email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isLength(value, { min: 8 })) {
                throw Error("Length of the password should be greater than 8");
            }

            if (value.toLowerCase().includes("password")) {
                throw Error(
                    'The password should not contain the keyword "password"!'
                );
            }
        }
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: false,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// userSchema.pre('save', async function(next) {
//     const user = this
//     if (user.isModified('password')) {
//         user.password = await bcrypt.hashSync(user.password, 6)
//     }
//     next()
// })

User.methods.generateAuthToken = async function() {
    try {
        let secretToken = jwt.sign({ _id: this._id.toString() }, 'urlshortnerabcdefghijklmnopqrstuvwxyz')
        this.tokens = this.tokens.concat({ token: secretToken })
        await this.save()
        return secretToken
    } catch (e) {
        console.log(e)
    }
}
const userSchema = mongoose.model('User', User)
module.exports = userSchema
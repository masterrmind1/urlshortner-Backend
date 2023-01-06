const mongoose = require('mongoose');
const validator = require('validator')
const dotenv = require("dotenv");
require('dotenv').config({ path: 'ENV_FILENAME' });
mongoose.connect('mongodb://127.0.0.1:27017/UrlShortner', {
    useNewUrlParser: true
})

const resetPasswordSchema = mongoose.model('resetPassword_URLs', {
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Please Enter valid Email')
            }
        }
    },
    Url: {
        type: String,
        require: true
    },
    urlId: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = resetPasswordSchema
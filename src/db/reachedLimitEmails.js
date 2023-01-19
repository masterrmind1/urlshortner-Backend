const mongoose = require('mongoose');
const validator = require('validator')
const dotenv = require("dotenv");
require('dotenv').config({ path: 'ENV_FILENAME' });
mongoose.connect('mongodb://127.0.0.1:27017/UrlShortner', {
    useNewUrlParser: true
})

const reachedLimitSchema = mongoose.model('ReachedLimitUsers', {
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Please Enter valid Email')
            }
        }
    }
})

module.exports = reachedLimitSchema
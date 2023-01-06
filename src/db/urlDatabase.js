const mongoose = require('mongoose');
const validator = require('validator')
require('dotenv').config({ path: 'ENV_FILENAME' });

mongoose.connect('mongodb://127.0.0.1:27017/UrlShortner', {
    useNewUrlParser: true
})
const urlSchema = mongoose.model('Generated_URLs', {
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Please Enter valid Email')
            }
        }
    },
    longUrl: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error('Please Enter a valid URL')
            }
        }
    },
    shortUrl: {
        type: String,
        require: true
    }
})

module.exports = urlSchema
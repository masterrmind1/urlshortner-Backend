const rateLimit = require('express-rate-limit')
const urlSchema = require('../db/urlDatabase')
const reachedLimitEmails = require('../db/reachedLimitEmails')
const express = require('express');
const app = express()
let generateUrlLimiter;

try {
    generateUrlLimiter = rateLimit({
        windowMs: 60 * 60 * 1000, // 1 hour
        max: 10, // Limit each IP to 5 create account requests per `window` (here, per hour)
        message: 'You can only generate 10 urls for free.',
        handler: (request, response, next, options) =>
            response.status(options.statusCode).send(options.message),
        onLimitReached: async(request, response, options) => {
            const userUrls = await urlSchema.find({ email: (request).body.email })
            console.log(userUrls.length)
            if (userUrls.length >= 5) {
                const reachedLimit = new reachedLimitEmails({
                    email: (request).body.email.toLowerCase()
                })
                reachedLimit.save()
            }

        },
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
        resetTime: ''
    })
} catch (e) {
    console.log(e)
}


app.use(generateUrlLimiter)

module.exports = generateUrlLimiter
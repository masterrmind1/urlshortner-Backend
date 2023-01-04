var router = require('express').Router();
const signupRoute = require('./signup')
const loginRoute = require('./login')
const logOutRoute = require('./logout')
const resetPasswordRoute = require('./reset-password')
const forgetPasswordRoute = require('./forget-password')
const generateUrlRoute = require('./generateURL')
const getUserDataRoute = require('./getUserData')
const getUsersAllUrls = require('./getAlluserUrls')
const getUserFromId = require('./getUserFromId')
router.use(signupRoute);
router.use(loginRoute)
router.use(resetPasswordRoute)
router.use(forgetPasswordRoute)
router.use(generateUrlRoute)
router.use(logOutRoute)
router.use(getUserDataRoute)
router.use(getUsersAllUrls)
router.use(getUserFromId)

module.exports = router;
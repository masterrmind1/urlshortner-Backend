var router = require('express').Router();
const signupRoute = require('./user_verification/signup')
const loginRoute = require('./user_verification/login')
const logOutRoute = require('./user_verification/logout')
const resetPasswordRoute = require('./user_verification/reset-password')
const forgetPasswordRoute = require('./user_verification/forget-password')
const generateUrlRoute = require('./generate_url/generateURL')
const getUserDataRoute = require('./getUserData/getUserData')
const getUsersAllUrls = require('./generate_url/getAlluserUrls')
const getUserFromId = require('./getUserData/getUserFromId')

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
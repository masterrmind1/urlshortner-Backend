var router = require('express').Router();

// router.use('/', require('./users'));
router.use('/getUserFromId', require('./getUserData'));
// router.use('/articles', require('./articles'));
const signupRoute = require('./signup');
app.use(signupRoute)
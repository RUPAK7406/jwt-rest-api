const router = require('express').Router();
const authController = require('../controller/auth');

router.route('/login')
        .post(authController.login);

module.exports = router;
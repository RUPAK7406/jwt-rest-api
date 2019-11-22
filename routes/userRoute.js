const router = require('express').Router();
const userController = require('../controller/user');

router.route('/register')
    .post(userController.registerUser);
router.route('/')
    .get(userController.listUsers);

module.exports = router;
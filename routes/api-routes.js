const router = require('express').Router();
const product = require('./productRoute');
const user = require('./userRoute');
const authentication = require('./authRoute');

//Test Route
router.get('/', function (req, res) {
    res.json({
        message: 'Welcome to CRUD APP API..!'
    });
});

router.use('/products', product);
router.use('/users', user);
router.use('/auth', authentication);

module.exports = router;
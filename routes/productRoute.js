const router = require('express').Router();
const productController = require('../controller/product');
const {PVT_ROUTE} = require('./verifytoken');

router.route('/')
    .get(PVT_ROUTE, productController.listProducts)
    .post(productController.addProduct);

router.route('/:productId')
    .get(productController.getProduct)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;
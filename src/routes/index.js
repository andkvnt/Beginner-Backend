const express = require('express');
const router = express.Router();
const productRouter = require('../routes/products');
const categoryRouter = require('../routes/category');
const orderRouter = require('../routes/order');
const userRouter = require('../routes/users');

router.use('/products', productRouter);
router.use('/category', categoryRouter);
router.use('/order', orderRouter);
router.use('/users', userRouter);

module.exports = router;

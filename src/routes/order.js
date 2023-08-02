const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');

router.get('/', orderController.getAllOrder);
router.get('/:id', orderController.getDetailOrder);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;

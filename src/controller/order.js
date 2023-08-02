const modelOrder = require('../model/order');
const commonHelper = require('../helper/common');
const { v4: uuidv4 } = require('uuid');
let order = [];
let order_id = [];

let orderController = {
  getAllOrder: async (req, res) => {
    const result = await modelOrder.selectAllOrder();
    const order = result.rows;
    commonHelper.response(res, order, 200, 'Get all order successful');
  },

  getDetailOrder: async (req, res) => {
    const id = req.params.id;
    const order = await modelOrder.selectOrder(id);

    commonHelper.response(res, order.rows, 200, 'Get order detail successful');
    console.log();
  },

  createOrder: async (req, res) => {
    const { productId, quantity, customerId } = req.body;
    const id = uuidv4();
    const data = {
      id,
      productId,
      quantity,
      customerId,
    };
    console.log(data);
    const result = await modelOrder.insertOrder(data);
    console.log(result);
    commonHelper.response(res, order_id, 200, 'Create order successful');
  },

  updateOrder: async (req, res) => {
    const id = req.params.id;
    const { productId, quantity, customerId } = req.body;
    const data = {
      productId,
      quantity,
      customerId,
    };
    const result = await modelOrder.updateOrder(order_id, data);

    res.json({
      Message: 'Order updated',
    });
  },

  deleteOrder: async (req, res) => {
    const id = req.params.id;
    const result = await modelOrder.deleteOrder(id);
    res.json({
      Message: 'Order deleted',
    });
  },
};

module.exports = orderController;

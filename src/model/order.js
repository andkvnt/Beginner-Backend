const Pool = require('../config/db');

const selectAllOrder = () => {
  return Pool.query('SELECT * FROM orders');
};

const selectOrder = (order_id) => {
  return Pool.query('SELECT * FROM orders WHERE order_id = $1', [order_id]);
};

const insertOrder = (order_id) => {
  const { id, order_date, customer_id, total_price } = order_id;
  return Pool.query('INSERT INTO order_id(id, order_date, customer_id, total_price) VALUES ($1, $2, $3, $4)', [id, order_date, customer_id, total_price]);
};

const updateOrder = (order_id, orderData) => {
  const { id, order_date, customer_id, total_price } = orderData;
  return Pool.query('UPDATE order_id SET id = $1, order_id = $2, customer_id = $3, total_price = $4 WHERE order_id = $5', [id, order_date, customer_id, total_price]);
};

const deleteOrder = (order_id) => {
  return Pool.query('DELETE FROM orders WHERE order_id = $1', [order_id]);
};

module.exports = {
  selectAllOrder,
  selectOrder,
  insertOrder,
  updateOrder,
  deleteOrder,
};

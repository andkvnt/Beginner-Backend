// const Pool = require('pg');
const Pool = require('../config/db');

const selectAllProduct = () => {
  return Pool.query('select * from product');
};

const selectProduct = (id) => {
  return Pool.query('select * from product where id=$1', [id]);
};

const insertProduct = (data) => {
  console.log(data);
  const { id, name, price, stock } = data;
  return Pool.query('insert into product(id,name,price,stock) values($1, $2, $3, $4)', [id, name, price, stock]);
};

const updateProduct = (id, data) => {
  const { name, price, stock, description } = data;
  return Pool.query('UPDATE product SET name = $1, price = $2, stock = $3, description = $4 WHERE id = $5', [name, price, stock, description, id]);
};

const deleteProduct = (id) => {
  console.log(id);
  return Pool.query('delete from product where id = $1', [id]);
};

const countData = () => {
  return Pool.query(`SELECT COUNT(*) FROM product`);
};

const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_product FROM product WHERE id_product=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  selectAllProduct,
  selectProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
  countData,
  findId,
};

// const Pool = require('pg');
const Pool = require('../config/db');

const selectAllProduct = () => {
  return Pool.query('select * from product');
};

const selectProduct = (id) => {
  return Pool.query(`select * from product where id_product=${id}`);
};

const insertProduct = (data) => {
  console.log(data);
  const { id, name, price, stock } = data;
  return Pool.query(`insert into product(id,name,price,stock) values('${id}', '${name}', '${price}', '${stock})'`);
};

const updateProduct = (data) => {
  const { id, name, price, stock } = data;
  return Pool.query(`update product set name=${name}, price=${price}, stock=${stock} where id=${id}`);
};

const deleteProduct = (id) => {
  return Pool.query(`delete from product where id = ${id}`);
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

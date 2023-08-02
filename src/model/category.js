// const Pool = require('pg');
const Pool = require('../config/db');

const selectAllCategory = () => {
  return Pool.query('select * from category');
};

const selectCategory = (id) => {
  return Pool.query('select * from category where id=$1', [id]);
};

const insertCategory = (data) => {
  console.log(data);
  const { id, name, price, stock } = data;
  return Pool.query('insert into category(id,name,price,stock) values($1, $2, $3, $4)', [id, name, price, stock]);
};

const updateCategory = (id, data) => {
  const { name, price, stock, description } = data;
  return Pool.query('UPDATE category SET name = $1, price = $2, stock = $3, description = $4 WHERE id = $5', [name, price, stock, description, id]);
};

const deleteCategory = (id) => {
  console.log(id);
  return Pool.query('delete from category where id = $1', [id]);
};

const countData = () => {
  return Pool.query(`SELECT COUNT(*) FROM category`);
};

const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_category FROM product WHERE id_category=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  selectAllCategory,
  selectCategory,
  insertCategory,
  updateCategory,
  deleteCategory,
  countData,
  findId,
};

const modelProduct = require('../model/products');
const commonHelper = require('../helper/common');
const { v4: uuidv4 } = require('uuid');
let products = [];
let productController = {
  getAllProduct: async (req, res) => {
    const result = await modelProduct.selectAllProduct();
    const product = result.rows;
    res.json(product);
  },

  getDetailProduct: async (req, res) => {
    const id = req.params.id;
    let product = await modelProduct.selectProduct(id);
    res.json(product.rows);
    console.log();
  },

  createProduct: async (req, res) => {
    const { name, price, stock } = req.body;
    const id = uuidv4();
    const data = {
      id,
      name,
      price,
      stock,
    };
    console.log(data);
    const result = await modelProduct.insertProduct(data);
    console.log(result);
    // let newProduct = {
    //   id: products.length + 1,
    //   name,
    //   price,
    //   stock,
    // };

    // console.log(count);
    res.json({
      Message: 'Product created',
    });
  },

  updateProduct: async (req, res) => {
    const id = req.params.id;
    const { name, price, stock, description } = req.body;
    const data = {
      price,
      name,
      stock,
      description,
    };
    const result = await modelProduct.updateProduct(id, data);

    res.json({
      Message: 'Product updated',
    });
  },

  deleteProduct: async (req, res) => {
    const id = req.params.id;
    const result = await modelProduct.deleteProduct(id);
    // console.log(index);
    res.json({
      Message: 'Product deleted',
    });
  },
};

module.exports = productController;

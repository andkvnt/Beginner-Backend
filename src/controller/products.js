const modelProduct = require('../model/products');
const commonHelper = require('../helper/common');
const { v4: uuidv4 } = require('uuid');

let productController = {
  getAllProduct: async (req, res) => {
    const result = await modelProduct.selectAllProduct();
    const product = result.rows;
    res.json(product);
  },
  getDetailProduct: (req, res) => {
    const id = Number(req.params.id);
    // modelProduct
    //   .selectProduct(id)
    //   .then((result) => {
    //     commonHelper.response(res, result.rows, 200, 'get data succes');
    //   })
    //   .catch((err) => res.send(err));
    let product = products.find((products) => products.id === id);
    res.json(product);
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

  updateProduct: (req, res) => {
    const id = Number(req.params.id);
    const { name, price, stock } = req.body;
    const index = products.findIndex((products) => products.id === id);
    let updateProduct = {
      id: products[index].id,
      name,
      price,
      stock,
    };
    products[index] = updateProduct;
    res.json({
      Message: 'Product updated',
    });
  },
  deleteProduct: (req, res) => {
    const id = Number(req.params.idProduct);
    const index = products.findIndex((products) => products.id === id);
    products.splice(index, 1);
    // console.log(index);
    res.json({
      Message: 'Product deleted',
    });
  },
};

module.exports = productController;

const modelProduct = require('../model/products');
const commonHelper = require('../helper/common');

let products = [
  {
    id: 1,
    name: 'baju',
    price: 80000,
    stock: 12,
  },
  {
    id: 2,
    name: 'kemeja',
    price: 120000,
    stock: 20,
  },
  {
    id: 3,
    name: 'celana',
    price: 90000,
    stock: 17,
  },
];

let productController = {
  getAllProduct: async (req, res) => {
    // res.json(products);
    try {
      const result = await modelProduct.selectAllProduct();
      // console.log(result);
      commonHelper.response(res, result.rows, 200, 'get data succes');
    } catch (error) {
      console.log(error);
    }
  },
  getDetailProduct: (req, res) => {
    const id = Number(req.params.id);
    modelProduct
      .selectProduct(id)
      .then((result) => {
        commonHelper.response(res, result.rows, 200, 'get data succes');
      })
      .catch((err) => res.send(err));
    // let product = products.find((products) => products.id === id);
    // res.json(product);
  },
  createProduct: (req, res) => {
    const { name, price, stock } = req.body;
    let newProduct = {
      id: products.length + 1,
      name,
      price,
      stock,
    };

    // console.log(name, price, stock);
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

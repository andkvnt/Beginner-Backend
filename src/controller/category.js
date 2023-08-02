const modelCategory = require('../model/category');
const commonHelper = require('../helper/common');
const { v4: uuidv4 } = require('uuid');
let category = [];
let products = [];
let categoryController = {
  getAllCategory: async (req, res) => {
    const result = await modelCategory.selectAllCategory();
    const category = result.rows;
    commonHelper.response(res, category, 200, 'get data succes');
  },

  getDetailCategory: async (req, res) => {
    const id = req.params.id;
    let category = await modelCategory.selectCategory(id);

    commonHelper.response(res, category.rows, 200, 'get detail category succes');
    console.log();
  },

  createCategory: async (req, res) => {
    const { name, price, stock } = req.body;
    const id = uuidv4();
    const data = {
      id,
      name,
      price,
      stock,
    };
    console.log(data);
    const result = await modelCategory.insertCategory(data);
    console.log(result);
    commonHelper.response(res, category, 200, 'Create category succes');
  },

  updateCategory: async (req, res) => {
    const id = req.params.id;
    const { name, price, stock, description } = req.body;
    const data = {
      price,
      name,
      stock,
      description,
    };
    const result = await modelCategory.updateCategory(id, data);

    res.json({
      Message: 'Category updated',
    });
  },

  deleteCategory: async (req, res) => {
    const id = req.params.id;
    const result = await modelCategory.deleteCategory(id);
    res.json({
      Message: 'Category deleted',
    });
  },
};

module.exports = categoryController;

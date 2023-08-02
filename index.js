require('dotenv').config();
const express = require('express');
const app = express();
const mainRouter = require('./src/routes/index');
// const productController = require('./src/controller/products');
const port = process.env.PORT;
app.use(express.json());
app.use('/', mainRouter);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

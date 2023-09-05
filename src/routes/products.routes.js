const express = require("express");
const {
  getProducts,
  createProduct,
} = require("../controllers/products/products.controller");

const productRoutes = express.Router();

productRoutes.get("/", getProducts);

productRoutes.post("/", createProduct);

module.exports = productRoutes;

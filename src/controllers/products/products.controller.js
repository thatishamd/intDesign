const asyncHandler = require("express-async-handler");
const { Api404Error, Api400Error } = require("../../utilities/customError");
const Product = require("./products.model");

const getProducts = asyncHandler(async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      data: products,
      message: "Products retrieved!",
    });
  } catch (error) {
    next(error);
  }
});

const createProduct = asyncHandler(async (req, res, next) => {
  try {
    const { name } = req.body;
    const productExists = await Product.findOne({ name });

    if (productExists) {
      throw new Api400Error("Product with the name already exists!");
    }

    product = await Product.create({ name });

    res.status(201).json({
      success: true,
      data: product,
      message: "Product created!",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = { getProducts, createProduct };

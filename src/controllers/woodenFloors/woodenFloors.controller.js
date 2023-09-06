const asyncHandler = require("express-async-handler");
const { Api404Error, Api400Error } = require("../../utilities/customError");
const WoodenFloor = require("./woodenFloors.model.");
const Product = require("../products/products.model");

const getWoodenFloors = asyncHandler(async (req, res, next) => {
  try {
    const woodenFloors = await WoodenFloor.find();

    res.status(200).json({
      success: true,
      data: woodenFloors,
      message: "WoodenFloors retrieved!",
    });
  } catch (error) {
    next(error);
  }
});

const createWoodenFloor = asyncHandler(async (req, res, next) => {
  try {
    const {
      code,
      rate,
      boxSize,
      sizeUnit,
      size,
      dimensionUnit,
      dimensionY,
      dimensionX,
      product,
    } = req.body;
    const woodenFloorExists = await WoodenFloor.findOne({ code });
    const productFound = await Product.findOne({ name: product });

    if (woodenFloorExists) {
      throw new Api400Error("WoodenFloor with the name already exists!");
    }
    console.log("PRODUCT: ", productFound);
    if (!productFound) {
      throw new Api400Error("Product catagory with that name not found!");
    }

    woodenFloor = await WoodenFloor.create({
      code,
      rate,
      boxSize,
      sizeUnit,
      size,
      dimensionUnit,
      dimensionX,
      dimensionY,
      productID: productFound._id,
    });

    res.status(201).json({
      success: true,
      data: woodenFloor,
      message: "WoodenFloor created!",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = { getWoodenFloors, createWoodenFloor };

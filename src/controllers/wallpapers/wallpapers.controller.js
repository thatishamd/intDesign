const asyncHandler = require("express-async-handler");
const Wallpaper = require("./wallpapers.model");
const Product = require("../products/products.model");

const getWallpapers = asyncHandler(async (req, res, next) => {
  try {
    const wallpapers = await Wallpaper.find();

    res.status(200).json({
      success: true,
      data: wallpapers,
      message: "Wallpapers retrieved!",
    });
  } catch (error) {
    next(error);
  }
});

const createWallpapers = asyncHandler(async (req, res, next) => {
  try {
    const {
      code,
      rate,
      boxSize,
      bookName,
      dimensionUnit,
      dimensionY,
      dimensionX,
      product,
    } = req.body;
    const wallpaperExists = await Wallpaper.findOne({ code });
    const productFound = await Product.findOne({ name: product });

    if (wallpaperExists) {
      throw new Api400Error("Wallpaper with the name already exists!");
    }

    if (!productFound) {
      throw new Api400Error("Product catagory with that name not found!");
    }

    wallpaper = await Wallpaper.create({
      code,
      rate,
      boxSize,
      bookName,
      dimensionUnit,
      dimensionX,
      dimensionY,
      productID: productFound._id,
    });

    res.status(201).json({
      success: true,
      data: wallpaper,
      message: "Wallpaper created!",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = { getWallpapers, createWallpapers };

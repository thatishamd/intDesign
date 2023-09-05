const asyncHandler = require("express-async-handler");
const { Api404Error, Api400Error } = require("../../utilities/customError");
const Wallpaper = require("./wallpapers.model");

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

const createWallpaper = asyncHandler(async (req, res, next) => {
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
    } = req.body;
    const wallpaperExists = await Wallpaper.findOne({ code });

    if (wallpaperExists) {
      throw new Api400Error("Wallpaper with the name already exists!");
    }

    wallpaper = await Wallpaper.create({
      code,
      rate,
      boxSize,
      sizeUnit,
      size,
      dimensionUnit,
      dimensionX,
      dimensionY,
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

module.exports = { getWallpapers, createWallpaper };

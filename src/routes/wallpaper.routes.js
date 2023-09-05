const express = require("express");
const {
  getWallpapers,
  createWallpaper,
} = require("../controllers/wallpapers/wallpapers.controller");

const wallpaperRoutes = express.Router();

wallpaperRoutes.get("/", getWallpapers);

wallpaperRoutes.post("/", createWallpaper);

module.exports = wallpaperRoutes;

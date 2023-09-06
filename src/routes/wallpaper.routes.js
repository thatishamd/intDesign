const express = require("express");
const {
  getWallpapers,
  createWallpapers,
} = require("../controllers/wallpapers/wallpapers.controller");

const wallpaperRoutes = express.Router();

wallpaperRoutes.get("/", getWallpapers);

wallpaperRoutes.post("/", createWallpapers);

module.exports = wallpaperRoutes;

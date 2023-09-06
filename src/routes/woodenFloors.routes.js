const express = require("express");
const {
  getWoodenFloors,
  createWoodenFloor,
} = require("../controllers/woodenFloors/woodenFloors.controller");

const woodenFloorRoutes = express.Router();

woodenFloorRoutes.get("/", getWoodenFloors);

woodenFloorRoutes.post("/", createWoodenFloor);

module.exports = woodenFloorRoutes;

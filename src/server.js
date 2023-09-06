const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const productRoutes = require("./routes/products.routes");
const woodenFloorRoutes = require("./routes/woodenFloors.routes");
const wallpaperRoutes = require("./routes/wallpaper.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Setting up middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));
app.use(cors());

// Setting a custom ping route
app.get("/ping", (request, response) => {
  response
    .status(200)
    .json({ success: true, data: {}, message: "Server is up and running!" });
});

// Setting up routes
app.use("/api/products", productRoutes);
app.use("/api/woodenFloors", woodenFloorRoutes);
app.use("/api/wallpapers", wallpaperRoutes);

app.use(errorHandler);

module.exports = app;

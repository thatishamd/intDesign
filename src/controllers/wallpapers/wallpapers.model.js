const mongoose = require("mongoose");

const wallpapersModel = mongoose.Schema(
  {
    code: {
      required: true,
      type: String,
      unique: true,
    },
    description: {
      required: false,
      type: mongoose.SchemaTypes.String,
    },
    dimensionX: {
      required: true,
      type: Number,
    },
    dimensionY: {
      required: true,
      type: Number,
    },
    dimensionUnit: {
      required: true,
      type: String,
    },
    size: {
      required: true,
      type: Number,
    },
    sizeUnit: {
      required: true,
      type: String,
    },
    boxSize: {
      required: true,
      type: Number,
    },
    rate: {
      required: true,
      type: Number,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const Wallpaper = mongoose.model("Wallpaper", wallpapersModel);
module.exports = Wallpaper;

const mongoose = require("mongoose");

const wallpaperSchema = mongoose.Schema(
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
    bookName: {
      required: true,
      type: String,
    },
    rate: {
      required: true,
      type: Number,
    },
    productID: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const Wallpaper = mongoose.model("Wallpaper", wallpaperSchema);
module.exports = Wallpaper;

const mongoose = require("mongoose");

const woodenFloorsSchema = mongoose.Schema(
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

const WoodenFloor = mongoose.model("WoodenFloors", woodenFloorsSchema);
module.exports = WoodenFloor;

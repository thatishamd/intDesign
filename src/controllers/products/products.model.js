const mongoose = require("mongoose");

const productsModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productsModel);
module.exports = Product;

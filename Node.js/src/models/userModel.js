const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
  },
  { collection: "Product", timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
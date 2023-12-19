const Product = require("./../models/userModel")
// const postProduct = asserts((req, res) => {
//   console.log(req.body);
// });

const getAllProduct = async (req, res) => {
    let allProducts = await Product.find()
  res.send(allProducts);
};

module.exports = {  getAllProduct };
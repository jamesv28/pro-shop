import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc get all products
// @route GET /api/products
// @access PUBLIC
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc get all products by id
// @route GET /api/products/:id
// @access PUBLIC
const getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else {
    res.status(404);
    throw new Error(`Resource not found`);
  }
});

export { getProductById, getProducts };

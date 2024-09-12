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

// @desc createProduct
// @route POST /api/products
// @access PRIVATE
const createProduct = asyncHandler(async (req, res, next) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "sample category",
    countInStock: 0,
    numReviews: 0,
    description: "sample description",
  });
  const newProduct = await product.save();
  res.status(200).json(newProduct);
});

export { getProductById, getProducts, createProduct };

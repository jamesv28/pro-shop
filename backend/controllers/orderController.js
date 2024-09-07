import Order from "../models/orderModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc create all orders
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res, next) => {
  res.send("add orders");
});

// @desc get loggedIn user orders
// @route GET /api/orders/myOrders
// @access Private
const getMyOrders = asyncHandler(async (req, res, next) => {
  res.send("get my orders");
});

// @desc create order  by id
// @route POST /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res, next) => {
  res.send("get orders by id");
});

// @desc update order to paid
// @route GET /api/orders/:id/paid
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res, next) => {
  res.send("update order to paid");
});

// @desc update order to delivered
// @route GET /api/orders/:id/delivered
// @access Private
const updateOrderToDelivered = asyncHandler(async (req, res, next) => {
  res.send("update order to delivered");
});

// @desc getAllOrders
// @route GET /api/orders
// @access Private
const getOrders = asyncHandler(async (req, res, next) => {
  res.send("get all orders");
});

export {
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
  addOrderItems,
  getMyOrders,
};

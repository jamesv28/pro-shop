import Order from "../models/orderModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc create all orders
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No items to order");
  } else {
    const order = new Order({
      orderItems: orderItems.map((order) => ({
        ...order,
        product: order._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createOrder = await order.save();

    res.status(200).json(createOrder);
  }
});

// @desc get loggedIn user orders
// @route GET /api/orders/myOrders
// @access Private
const getMyOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @desc create order  by id
// @route POST /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc update order to paid
// @route PUT /api/orders/:id/paid
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc update order to delivered
// @route GET /api/orders/:id/delivered
// @access Private
const updateOrderToDelivered = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updateOrder = await order.save();
    res.status(200).json(updateOrder);
  } else {
    res.status(404);
    throw new Error("No order found");
  }
});

// @desc getAllOrders
// @route GET /api/orders
// @access Private
const getOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({}).populate("user", "id name");
  res.status(200).json(orders);
});

export {
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
  addOrderItems,
  getMyOrders,
};

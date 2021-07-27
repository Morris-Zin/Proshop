const asyncHandler = require("express-async-handler");
const Order = require("../models/Order");

//@desc Create new order
//@route Get /api/orders
//@access Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymendMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(404);
    throw new Error("No order items");
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymendMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});
const getOrderITemById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "email name"
  );
  if (order) {
    res.status(200).json(order);
  } else {
    throw new Error("There is no order associated with that id");
  }
});

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResults = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

   const updatedOrder = await order.save(); 
    res.status(200).json(updatedOrder);
  } else {
    throw new Error("There is no order associated with that id");
  }
});

module.exports = {
  addOrderItems,
  getOrderITemById,
  updateOrderToPaid

};

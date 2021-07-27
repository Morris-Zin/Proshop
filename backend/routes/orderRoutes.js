const express = require("express");
const {
  addOrderItems,
  getOrderITemById,
  updateOrderToPaid,
} = require("../controllers/orderController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderITemById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;

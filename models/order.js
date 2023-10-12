const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: { type: String, trim: true, required: true },
    userId: { type: String, trim: true, required: true },
    userName: { type: String, trim: true, required: true },
    status: { type: String, trim: true, required: true },
    tracking: { type: String, trim: true, required: true },
    orderedProduct: { type: Array, trim: true, required: true },
    items: { type: Array, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
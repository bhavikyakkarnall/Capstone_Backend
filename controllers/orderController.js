const order = require("../models/order.js");

exports.createOrder = async (req, res) => {
    try {
        const newOrder = new order(req.body); // Use 'item' here instead of 'Item'
        const savedOrder = await newOrder.save(); // Save the item to the database
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await order.find({});
        res.status(200).json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, error: err.message });
    }
};

exports.updateOrder = async (req, res) => {
    const orderId = req.params.id; // Get the item ID from the request parameters

    try {
        // Find the item by its ID and update it with the new data from the request body
        const updatedOrder = await order.findByIdAndUpdate(orderId, req.body, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.status(200).json(updatedOrder);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.deleteOrder = async (req, res) => {
    const orderId = req.params.id; // Get the item ID from the request parameters

    try {
        // Find the item by its ID and remove it from the database
        const deletedOrder = await item.findByIdAndRemove(orderId);

        if (!deletedOrder) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.status(200).json({ message: "Item deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


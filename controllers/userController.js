const user = require("../models/user.js");

exports.createUser = async (req, res) => {
    try {
        const newUser = new user(req.body); // Use 'item' here instead of 'Item'
        const savedUser = await newUser.save(); // Save the item to the database
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await user.find({});
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, error: err.message });
    }
};

exports.updateItem = async (req, res) => {
    const userId = req.params.id; // Get the item ID from the request parameters

    try {
        // Find the item by its ID and update it with the new data from the request body
        const updatedUser = await user.findByIdAndUpdate(userId, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.id; // Get the item ID from the request parameters

    try {
        // Find the item by its ID and remove it from the database
        const deletedUser = await item.findByIdAndRemove(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.status(200).json({ message: "Item deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


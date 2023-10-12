const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemId: { type: String, trim: true, required: true },
    productName: { type: String, trim: true, required: true },
    productType: { type: String, trim: true, required: true },
    productDesc: { type: String, trim: true, required: true },
    productImg: { type: String, trim: true, required: true },
    serialNo: { type: String, trim: true, required: true },
    location: { type: String, trim: true, required: true },
    userId: { type: String, trim: true, required: true },
    userName: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("item", itemSchema);

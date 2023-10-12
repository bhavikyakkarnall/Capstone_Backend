const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: { type: String, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    userType: { type: String, trim: true, required: true },
    company: { type: String, trim: true, required: true },
    Address: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true},
    phone: { type: String, trim: true, required: true, unique: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
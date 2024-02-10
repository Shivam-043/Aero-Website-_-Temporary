const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    _id: String,
    sequence_value: { type: Number, default: 1111 },
}, { timestamps: true });

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
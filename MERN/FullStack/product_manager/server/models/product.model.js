const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [3, "title must be at least 4 chars"],
        required: [true, "title field is required"]
    },
    description: {
        type: String,
        minlength: [5, "description must be at least 5 chars"],
        required: [true, "description field is required"]
    },
    price: {
        type: Number,
        min: [0, "price cannot be negative"]
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
const mongoose = require("mongoose")
const { Schema, model } = mongoose

const productSchema = new Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    price: {type: Number, required: true},
    images: {type: String, required: true},
    type: {type: String, required: true, trim: true},
    featured: {type: Boolean, default: false},
    onSale: {type: Boolean, default: false},
    hasStock: {type: Boolean, default: true}
})

module.exports = model("Product", productSchema)
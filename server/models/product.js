const mongoose = require("mongoose")
const { Schema } = mongoose

const productSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    images: [{type: String, required: true}],
    onSale: {type: Boolean, default: false},
    hasStock: {type: Boolean, default: true}
})

module.exports = productSchema
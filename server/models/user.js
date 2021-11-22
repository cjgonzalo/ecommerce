const {Schema} = require("mongoose")
const product = require("./product.productSchema")

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    //paymentMethod: {type: ??},
    kart: [{type: product, default: []}]
})

module.exports = userSchema
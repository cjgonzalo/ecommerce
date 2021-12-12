const {Schema, model} = require("mongoose")
const product = require("./product.productSchema")

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    //paymentMethod: {type: ??},
    kart: {type: Array, default: []},
    admin: {type: Boolean, required: true}
})

module.exports = model("User", userSchema)
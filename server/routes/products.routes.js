const express = require("express")
const { getProducts, createProduct, updateProduct, deleteProduct, getProduct, getProductsByType } = require("../controllers/products.controller")
const router = express.Router()

router.route("/")
    .get(getProducts)
    .post(createProduct)

router.route("/:param") // param could be an id, type, etc
    .get([getProduct, getProductsByType])

router.route("/:id")
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router
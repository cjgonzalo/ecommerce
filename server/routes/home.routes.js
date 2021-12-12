const express = require("express")
const { getFeaturedProducts } = require("../controllers/products.controller")
const router = express.Router()

router.route("/")
    .get(getFeaturedProducts)

module.exports = router
const express = require("express")
const { getNewGames, getProductsByType } = require("../controllers/products.controller")
const router = express.Router()

router.route("/:param")
    .get(getProductsByType)

module.exports = router
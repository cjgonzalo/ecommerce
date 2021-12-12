const express = require("express")
const router = express.Router()
const {sendEmail} = require("../controllers/contact.controller")

router.route("/")
    .post(sendEmail)

module.exports = router
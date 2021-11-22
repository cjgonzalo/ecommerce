const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const path = require("path")
const { mongoose } = require("./database")

// Settings
app.set("port", process.env.PORT || 3001)

// Middlewares
app.use(morgan("dev"))
app.use(express.json())

// Static Files
app.use(express.static(path.join(__dirname, ".././client/public/")))

// Routes
app.use("/", require("./routes/home.routes"))
app.use("/login", require("./routes/login.routes"))
app.use("/productos", require("./routes/products.routes"))
app.use("/contacto", require("./routes/contact.routes"))
app.use((req, res) => {
    res.status(404).render("404")
})

app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`)
})
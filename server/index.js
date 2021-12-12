const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const path = require("path")
const { mongoose } = require("./database")
const cors = require("cors")

// Settings
app.set("port", process.env.PORT || 4000)

// Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// Static Files
app.use(express.static(path.join(__dirname, ".././client/public/")))

// Routes
app.use("/api/home", require("./routes/home.routes"))
app.use("/api/login", require("./routes/login.routes"))
app.use("/api/productos", require("./routes/products.routes"))
app.use("/api/contacto", require("./routes/contact.routes"))
app.use((req, res) => {
    res.status(404).send("Página no encontrada")
})

app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`)
})
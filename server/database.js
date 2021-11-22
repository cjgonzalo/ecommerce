const mongoose = require("mongoose") 

mongoose.connect(process.env.DB_URI)
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err))

module.exports = mongoose
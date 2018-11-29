const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const indexRouter = require("./routes/index")

const app = express()

mongoose.connect(
    process.env.DB_URI,
    { user: process.env.DB_USER, pass: process.env.DB_PASS, dbName: "cse5a" }
)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(cors())

app.use("/", indexRouter)

module.exports = app

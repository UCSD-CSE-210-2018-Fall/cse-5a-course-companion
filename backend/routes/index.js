const express = require("express")
const router = express.Router()
const apiRouter = require("./api")

router.get("/", function(req, res) {
    res.redirect("https://cse5a.com")
})

router.use("/api/v1", apiRouter)

module.exports = router

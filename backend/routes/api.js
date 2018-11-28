const express = require("express")
const router = express.Router()
const quizzesRouter = require("./api/quizzes")

router.get("/", function(req, res) {
    res.redirect("https://cse5a.com")
})

router.use("/quizzes", quizzesRouter)

module.exports = router

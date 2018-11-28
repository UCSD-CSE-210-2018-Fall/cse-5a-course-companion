const mongoose = require("mongoose")

const quizSchema = mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model("Quiz", quizSchema, "quizzes")

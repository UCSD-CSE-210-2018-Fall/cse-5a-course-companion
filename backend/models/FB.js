const mongoose = require("mongoose")

const FBSchema = mongoose.Schema({
    quiz_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true
    },
    question: { type: String, required: true },
    code: { type: String },
    explanation: { type: String, required: true },
    correctAnswer: { type: String, required: true }
})

module.exports = mongoose.model("FB", FBSchema, "FBs")

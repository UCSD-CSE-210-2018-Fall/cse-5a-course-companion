const mongoose = require("mongoose")

const FBSchema = mongoose.Schema({
    quiz_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true
    },
    question: { type: String },
    user: { type: String, required: true },
    id: { type: String, required: true }
})

module.exports = mongoose.model("FB", FBSchema, "FBs")

const mongoose = require("mongoose")

const MCSchema = mongoose.Schema({
    quiz_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MC",
        required: true
    },
    question: { type: String, required: true },
    code: { type: String },
    choices: { type: [String], required: true },
    explanations: { type: [String], required: true },
    correctChoice: { type: Number, required: true }
})

module.exports = mongoose.model("MC", MCSchema, "MCs")

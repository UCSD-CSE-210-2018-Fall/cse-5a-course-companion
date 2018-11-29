const express = require("express")
const router = express.Router()
const Quiz = require("../../models/quiz")
const REPL = require("../../models/REPL")
const MC = require("../../models/MC")
const FB = require("../../models/FB")

router.get("/", function(req, res) {
    Quiz.find({}, function(err, result) {
        if (err) {
            return res.status(400).json(err)
        }
        return res.status(200).json(result)
    })
})

router.get("/:id", function(req, res) {
    Quiz.findOne({ _id: req.params.id }, function(err, result) {
        if (err) {
            return res.status(400).json(err)
        }
        return res.status(200).json(result)
    })
})

router.get("/:id/REPLs", function(req, res) {
    REPL.find({ quiz_id: req.params.id }, function(err, result) {
        if (err) {
            return res.status(400).json(err)
        }
        return res.status(200).json(result)
    })
})

router.get("/:id/MCs", function(req, res) {
    MC.find({ quiz_id: req.params.id }, function(err, result) {
        if (err) {
            return res.status(400).json(err)
        }
        return res.status(200).json(result)
    })
})

router.get("/:id/FBs", function(req, res) {
    FB.find({ quiz_id: req.params.id }, function(err, result) {
        if (err) {
            return res.status(400).json(err)
        }
        return res.status(200).json(result)
    })
})

module.exports = router

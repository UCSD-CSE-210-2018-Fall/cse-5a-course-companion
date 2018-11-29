const chai = require("chai")
const should = chai.should()
const chaiHttp = require("chai-http")
const app = require("../app")

const baseURI = "/api/v1/"

chai.use(chaiHttp)

let requester = null

describe("Quizzes API endpoints", function() {
    before(function() {
        requester = chai.request(app).keepOpen()
        this.timeout(20000) // high timeout to make sure database conn is ready
        return requester.get(`${baseURI}quizzes`) // make a dummy req
    })

    let firstQuizID = null

    describe("GET quizzes", function() {
        it("should return a list of all quizzes", function() {
            return requester
                .get(`${baseURI}quizzes`)
                .then(function(res) {
                    res.should.have.status(200)
                    const quizzes = res.body
                    quizzes.should.be.a("array")
                    for (const quiz of quizzes) {
                        quiz.should.be.a("object")
                        quiz.should.have.property("_id")
                        quiz.should.have.property("name")
                    }
                    // use the first one's id to run the single quiz tests below
                    firstQuizID = quizzes[0]._id
                })
                .catch(function(err) {
                    throw err
                })
        })

        describe("GET quizzes/:id", function() {
            it("should return the object of a single quiz corresponding to the :id", function() {
                return requester
                    .get(`${baseURI}quizzes/${firstQuizID}`)
                    .then(function(res) {
                        res.should.have.status(200)
                        const quiz = res.body
                        quiz._id.should.be.equal(firstQuizID)
                    })
                    .catch(function(err) {
                        throw err
                    })
            })

            describe("GET quizzes/:id/MCs", function() {
                it("should return the list of multiple choice questions of the quiz", function() {
                    return requester
                        .get(`${baseURI}quizzes/${firstQuizID}/MCs`)
                        .then(function(res) {
                            res.should.have.status(200)
                            const mcs = res.body
                            mcs.should.be.a("array")
                            for (const mc of mcs) {
                                mc.should.have.property("quiz_id")
                                mc.quiz_id.should.be.equal(firstQuizID)

                                mc.should.have.property("question")
                                mc.question.should.be.a("string")

                                if (mc.code) {
                                    mc.code.should.be.a("string")
                                }

                                mc.should.have.property("choices")
                                mc.choices.should.be.a("array")
                                for (const choice of mc.choices) {
                                    choice.should.be.a("string")
                                }

                                mc.should.have.property("explanations")
                                mc.explanations.should.be.a("array")
                                for (const explanation of mc.explanations) {
                                    if (explanation) {
                                        explanation.should.be.a("string")
                                    }
                                }

                                mc.should.have.property("correctChoice")
                                mc.correctChoice.should.be.a("number")
                            }
                        })
                        .catch(function(err) {
                            throw err
                        })
                })
            })

            describe("GET quizzes/:id/FBs", function() {
                it("should return the list of fill in the blank questions of the quiz", function() {
                    return requester
                        .get(`${baseURI}quizzes/${firstQuizID}/FBs`)
                        .then(function(res) {
                            res.should.have.status(200)
                            const fbs = res.body
                            fbs.should.be.a("array")
                            for (const fb of fbs) {
                                fb.should.have.property("quiz_id")
                                fb.quiz_id.should.be.equal(firstQuizID)

                                fb.should.have.property("question")
                                fb.question.should.be.a("string")

                                if (fb.code) {
                                    fb.code.should.be.a("string")
                                }

                                fb.should.have.property("explanation")
                                fb.explanation.should.be.a("string")

                                fb.should.have.property("correctAnswer")
                                fb.correctAnswer.should.be.a("string")
                            }
                        })
                        .catch(function(err) {
                            throw err
                        })
                })
            })

            describe("GET quizzes/:id/REPLs", function() {
                it("should return the list of code exercises of the quiz", function() {
                    return requester
                        .get(`${baseURI}quizzes/${firstQuizID}/REPLs`)
                        .then(function(res) {
                            res.should.have.status(200)
                            const repls = res.body
                            repls.should.be.a("array")
                            for (const repl of repls) {
                                repl.should.have.property("quiz_id")
                                repl.quiz_id.should.be.equal(firstQuizID)

                                if (repl.question) {
                                    repl.question.should.be.a("string")
                                }

                                repl.should.have.property("user")
                                repl.user.should.be.a("string")
                                repl.user[0].should.be.equal("@")

                                repl.should.have.property("id")
                                repl.id.should.be.a("string")
                            }
                        })
                        .catch(function(err) {
                            throw err
                        })
                })
            })
        })
    })

    after(function() {
        requester.close()
    })
})

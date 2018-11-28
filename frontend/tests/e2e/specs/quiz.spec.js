// https://docs.cypress.io/api/introduction/api.html

describe("Quiz Tests", () => {
    beforeEach(function() {
        cy.visit("/quizzes/5bfe87261c9d4400003100b7")
    })

    it("should loads", () => {
        cy.get("h2").contains("Quiz")
    })

    describe("REPL component", () => {
        it("should exists", () => {
            expect(cy.get(".repl")).to.exist
        })
    })

    describe("Multiple Choice component", () => {
        it("should exist", () => {
            expect(cy.get(".multiple-choice")).to.not.be.empty
        })
    })

    describe("Fill in the Blank components", () => {
        it("should exist", () => {
            expect(cy.get(".fill-blank")).to.not.be.empty
        })
    })
})

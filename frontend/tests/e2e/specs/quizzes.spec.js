// https://docs.cypress.io/api/introduction/api.html

describe("Quizzes Test", () => {
    beforeEach(function() {
        cy.visit("/quizzes")

        //Is this too hardcoded?
        cy.get("#app > div > ul > li:nth-child(1) > a").as("midtermBtn")

        cy.get("#app > div > ul > li:nth-child(2) > a").as("finalBtn")
    })

    it("should loads", () => {
        cy.get("h2").should("exist")
    })

    describe("Quiz buttons", () => {
        it("should exist", () => {
            cy.get("@midtermBtn").should("have.text", "Midterm")
        })
        it("should exist", () => {
            cy.get("@finalBtn").should("have.text", "Final")
        })

        it("should load page", () => {
            cy.get("@midtermBtn").click()
            cy.url().should("include", "/5bfe87261c9d4400003100b7")
        })
        it("should load page", () => {
            cy.get("@finalBtn").click()
            cy.url().should("include", "/5bfeabf22ef481430623fda2")
        })
    })
})

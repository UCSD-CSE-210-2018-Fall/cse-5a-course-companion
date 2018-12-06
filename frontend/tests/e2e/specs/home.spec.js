// https://docs.cypress.io/api/introduction/api.html

describe("Home Test", () => {
    beforeEach(function() {
        cy.visit("/")
    })

    it("should loads", () => {
        cy.get("h2").contains("Welcome")
    })
})

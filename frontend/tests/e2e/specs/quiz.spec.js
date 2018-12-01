// https://docs.cypress.io/api/introduction/api.html

//
const choice1 = "div:nth-child(2) > label"
const choice2 = "div:nth-child(3) > label"
const choice3 = "div:nth-child(4) > label"
const choice4 = "div:nth-child(5) > label"

const choices = [choice1, choice2, choice3, choice4]

describe("Quiz Tests", () => {
    beforeEach(function() {
        cy.visit("/quizzes/5bfe87261c9d4400003100b7")

        cy.get("#app > div > div:nth-child(4) > div:nth-child(1)").as("MC1")
        cy.get("#app > div > div:nth-child(6) > div:nth-child(1)").as("FB1")
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

        it("choices should be active when clicked on", () => {
            cy.get("@MC1").within(() => {
                choices.forEach(choice => {
                    cy.get(choice).not(".active")
                    cy.get(choice).click()
                    expect(cy.get(choice + ".active")).to.exist
                })
            })
        })

        it("should give feedback for incorrect answer", () => {
            cy.get("@MC1").within(() => {
                cy.get(choice1).click()
                cy.get("button").click()
                expect(cy.get(".alert-warning")).to.exist
            })
        })

        it("should display feedback for correct answer", () => {
            cy.get("@MC1").within(() => {
                cy.get(choice2).click()
                cy.get("button").click()
                expect(cy.get(".alert-success")).to.exist
            })
        })

        it("should stop displaying feedback when a new answer is selected", () => {
            cy.get("@MC1").within(() => {
                cy.get(choice1).click()
                cy.get("button").click()
                expect(cy.get(".alert-warning")).to.exist
                cy.get(choice2).click()
                cy.get(".alert-warning").should("not.be.visible")
            })
        })
    })

    describe("Fill in the Blank components", () => {
        it("should exist", () => {
            expect(cy.get(".fill-blank")).to.not.be.empty
        })

        it("should give feedback for incorrect answer", () => {
            cy.get("@FB1").within(() => {
                cy.get("#input").type("wrong answer friend")
                cy.get("button").click()
                expect(cy.get(".alert-warning")).to.exist
            })
        })

        it("should give feedback for correct answer", () => {
            cy.get("@FB1").within(() => {
                cy.get("#input").type("for(int i = 0; i < 5; i++){}")
                cy.get("button").click()
                expect(cy.get(".alert-success")).to.exist
            })
        })

        it("should stop displaying feedback when user starts typing", () => {
            cy.get("@FB1").within(() => {
                cy.get("#input").type("i dont know")
                cy.get("button").click()
                expect(cy.get(".alert-warning")).to.exist

                cy.get("#input").clear()
                cy.get("#input").type("wait i think i got it")
                cy.get(".alert-warning").should("not.be.visible")
            })
        })

        it("submit button should not do anything w/o input", () => {
            cy.get("@FB1").within(() => {
                expect(cy.get("div").contains("Please enter your answer")).to
                    .exist
                expect(cy.get("button.disabled")).to.exist
            })
        })

        it("submit button should be enabled with input", () => {
            cy.get("@FB1").within(() => {
                expect(cy.get("div").contains("Please enter your answer")).to
                    .exist
                cy.get("#input").type("asdf asdf asdf")
                expect(cy.get("button").not(".disabled")).to.exist
                cy.get("div")
                    .contains("Please enter your answer")
                    .should("not.be.visible")
            })
        })
    })
})

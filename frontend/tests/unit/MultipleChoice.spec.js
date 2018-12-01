import "chai/register-should"
import { shallowMount } from "@vue/test-utils"
import MultipleChoice from "@/components/MultipleChoice.vue"

describe("MultipleChoice.vue", () => {
    const wrapper = shallowMount(MultipleChoice, {
        propsData: {
            question: "print hello world",
            code: "int i;\nint j = 6;\n",
            choices: ["one", "two", "three", "four"],
            explanation: ["one", "two", "three", null],
            correctAnswer: 3
        }
    })

    it("should render successfully", () => {
        const mc_visible = wrapper.isVisible()
        mc_visible.should.be.equal(true)
    })

    it("should display question content correctly", () => {
        const question_p = wrapper.find("p")
        question_p.text().should.be.equal("print hello world")
    })

    it("should display code content correctly", () => {
        const code = wrapper.find("code")
        code.text().should.be.equal("int i;\nint j = 6;")
    })
})

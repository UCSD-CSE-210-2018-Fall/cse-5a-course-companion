import "chai/register-should"
import { shallowMount } from "@vue/test-utils"
import REPL from "@/components/REPL.vue"

describe("REPL.vue", () => {
    it("should render successfully", () => {
        const wrapper = shallowMount(REPL, {
            propsData: { question: "hi", user: "@tommyang", id: "hello" }
        })
        wrapper.contains("iframe").should.be.true
    })
})

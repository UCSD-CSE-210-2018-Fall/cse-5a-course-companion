<template>
  <div>
    <h2>Quiz</h2>
    <b-row class="justify-content-center">
      <b-col md="12">
        <REPL v-bind="repl"></REPL>
      </b-col>
      <b-col md="6">
        <MultipleChoice v-bind="mc1"></MultipleChoice>
      </b-col>
      <b-col md="6">
        <MultipleChoice v-bind="mc2"></MultipleChoice>
      </b-col>
      <b-col md="6">
        <MultipleChoice v-bind="mc3"></MultipleChoice>
      </b-col>
      <b-col md="6">
        <MultipleChoice v-bind="mc4"></MultipleChoice>
      </b-col>
      <b-col md="6">
        <FillBlank v-bind="fb1"></FillBlank>
      </b-col>
      <b-col md="6">
        <FillBlank v-bind="fb2"></FillBlank>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MultipleChoice from "./components/MultipleChoice.vue"
import FillBlank from "./components/FillBlank.vue"
import REPL from "./components/REPL.vue"

export default {
  name: "Quiz",
  data() {
    return {
      repl: {
        question:
          "Fill in the blanks with the appropriate types and format specifiers to output the values correctly.",
        user: "@tommyang",
        id: "TypeAndFormatSpecifier"
      },
      mc1: {
        question: "What is this line?",
        code: `int function2(int num, int times);`,
        choices: [
          "C Preprocessor define",
          "Function Prototype",
          "Local Variable",
          "Function Definition"
        ],
        explanations: [
          "This is not #define.",
          null,
          "This is not a variable declaration. ",
          "There is no function body. "
        ],
        correctChoice: 1
      },
      mc2: {
        question: "Which choice is the proper way to define a constant?",
        choices: ["#def one", "#define one 1", "#DEFINE 3", "#define ONE 1"],
        explanations: [
          "#def is incorrect",
          "Although this choice will compile, constants should be writtin in all capital letters with underscores between words",
          "#define, not #DEFINE, and no name is specified",
          null
        ],
        correctChoice: 3
      },
      mc3: {
        question: "Which of the choices is not a keyword in C?",
        choices: ["enum", "boolean", "static", "register"],
        explanations: [
          "This is a keyword",
          null,
          "This is a keyword",
          "This is a keyword"
        ],
        correctChoice: 1
      },
      mc4: {
        question:
          "Which of the following is an invalid way of initializng a variable??",
        choices: [
          "int i;",
          "int i, j, k;",
          "int char k = 5;",
          "int i, j, k = 5;"
        ],
        explanations: [
          "This is correct",
          "This is correct",
          "This is correct",
          null
        ],
        correctChoice: 2
      },
      fb1: {
        question:
          "What is the 3rd line (counting from 1) printed in the following block of statements?",
        code: `
        int i = 1;
        int j = 6;
        while (i < j) {
          printf("%d %d\\n", i, j - i);
          ++i;
        }`,
        explanation:
          "Consider the change of i at the end of each iteration and the print format. ",
        correctAnswer: "3 3"
      },
      fb2: {
        question: "What is printed as a resulted of this block of code?",
        code: `
        int i;
        int j = 6;
        int k = 3;

        i = j % k + k % 5 % 3;
        printf("%d\\n", i);`,
        explanation: "Look up precedence table for guidance. ",
        correctAnswer: "0"
      }
    }
  },
  components: {
    MultipleChoice,
    FillBlank,
    REPL
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

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
        <MultipleChoice v-bind="mc5"></MultipleChoice>
      </b-col>
      <b-col md="6">
        <MultipleChoice v-bind="mc6"></MultipleChoice>
      </b-col>
       <b-col md="6">
        <MultipleChoice v-bind="mc7"></MultipleChoice>
      </b-col>
      <b-col md="6">
        <MultipleChoice v-bind="mc8"></MultipleChoice>
      </b-col>
      <b-col md="6">
        <MultipleChoice v-bind="mc9"></MultipleChoice>
      </b-col>


      <b-col md="6">
        <FillBlank v-bind="fb1"></FillBlank>
      </b-col>
      <b-col md="6">
        <FillBlank v-bind="fb2"></FillBlank>
      </b-col>
      <b-col md="6">
        <FillBlank v-bind="fb3"></FillBlank>
      </b-col>
      <b-col md="6">
        <FillBlank v-bind="fb4"></FillBlank>
      </b-col>
      <b-col md="6">
        <FillBlank v-bind="fb5"></FillBlank>
      </b-col>
      <b-col md="6">
        <FillBlank v-bind="fb6"></FillBlank>
      </b-col>
      <b-col md="6">
        <FillBlank v-bind="fb7"></FillBlank>
      </b-col>
      <b-col md="8">
        <FillBlank v-bind="fb8"></FillBlank>
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
        question: "",
        user: "@chz025",
        id: "CSE-MidTerm-Test"
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
      mc5: {
        question: "Which of the following is a valid C identifier",
        choices: ["42answers2Life", "float", "m&m", "cash_Money"],
        explanations: [
          "Variable names cannot begin with numbers",
          "float is a datatype and a C reserved key word",
          "& is a character that is not allowed to be",
          null
        ],
        correctChoice: 3
      },
      mc6: {
        question: "Which of the following is a valid C identifier",
        choices: ["long", "_underTaker", "\\backslash!", "-yikes-"],
        explanations: [
          "long is a basic datatype and a C reserved keyword",
          null,
          "backslash and '!' are not allowed in varibale names",
          "'-' is not allowed in variable names"
        ],
        correctChoice: 1
      },
      mc7: {
        question: "Which is taylor in the first line?",
        code: `void awardCeremony(int taylor, int kanye){ //hold up }`,
        choices: [
          "Function Prototype",
          "Local Variable",
          "Formal Parameter",
          "Actual Argument"
        ],
        explanations: [
          "There are braces at the end which indicate that the line as a whole is a Function definition. A Function Prototype looks like 'int petDog();",
          "This is a local variable but the overarching answer is a Formal Parameter. ",
          null,
          "An actual argument is an argument passed to the function when it is called. For example when you call scanf('%d',i), '%d', and i are actual arguments."
        ],
        correctChoice: 2
      },
      mc8: {
        question: "What is this line?",
        code: `void endless(void);`,
        choices: [
          "Function Definition",
          "Local Variable",
          "Return Type",
          "Function Prototype"
        ],
        explanations: [
          "This is not a definition since no code is provided for the implementation of the function",
          "There are no variables in this line",
          "The return type is part of the line, but not the whole line",
          null
        ],
        correctChoice: 3
      },
      mc9: {
        question:
          "Which of the following is the correct way to initialize a float?",
        choices: [
          "float duck = 4.20f;",
          "float f = 5;",
          "float = 7.0;",
          "fl flock = 'f';"
        ],
        explanations: [
          null,
          "5 is not a float so cannot be assigned",
          "7.0 is a double so cannot be assinged",
          "This is just wrong"
        ],
        correctChoice: 0
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
        question: "What is printed as a result of this block of code?",
        code: `
        int i;
        int j = 6;
        int k = 3;

        i = j % k + k % 5 % 3;
        printf("%d\\n", i);`,
        explanation: "Look up precedence table for guidance. ",
        correctAnswer: "0"
      },
      fb3: {
        question: "What is printed as a result of this block of code?",
        code: `
        int x;
        int y = 7;
        int b = y + 3;
        x = b * 2 % y;

        if(x > b - 1)
            printf("%d\\n",b);
        else
            printf("%d\\n",x * 2);
        `,
        explanation: "Look up precedence table for guidance",
        correctAnswer: "12"
      },
      fb4: {
        question:
          "What is printed as a result of this block of code? If there is a new line, type 'line one\\nline2'",
        code: `
        int x = 5;

        switch(x > x % 3)
        {
          case 0:
            printf("I\\n");
            x += 5;
            break;
          case 1:
            printf("Am\\n");
            x *= 2;

          case 2:
            printf("A Robot\\n");
            x = x % x;
            break;

          default:
            printf("Save me\\n");
            x = 42;
        }

        printf("x = %d", x);
        `,
        explanation:
          "Make sure to review how switch statements and break statements work in conjunction with one another",
        correctAnswer: "Am\\nA Robot\\nx = 0"
      },
      fb5: {
        question:
          "What is the last line printed as a result of this block of code?",
        code: `
        #define YEAR 2018

        int x = YEAR % 2000;
        int result = 1;
        do{
          result *= result + 2;
          printf("%d\\n",result);
        }while(result < x);

        `,
        explanation:
          "Make sure you know how *=, +=, -= operators and do while loops work.",
        correctAnswer: "255"
      },
      fb6: {
        question: "What is printed as a result of this block of code?",
        code: `
          int makeHam(int patties, int buns);
          void barkDog(int food);

          int main(void){
              int patties = 25;
              int buns = 8;

              int hamburgers = makeHam(patties, buns);
              printf("%d hamburgers made\\n",hamburgers);

              barkDog(hamburgers);

              return 0;

          }

          int makeHam(int patties, int buns){
              return patties/buns;
          }

          void barkDog(int food){
              for(int i = 0; i < food; i++){
                  printf("woof");
              }
          }


         `,
        explanation:
          "Make sure you know how functions work and how integer division works.",
        correctAnswer: "3 hamburgers made\nwoofwoofwoof"
      },
      fb7: {
        question:
          "Convert this while loop to a for loop. Answer should be in the form of 'for(int x = 5; x < 10; i++){}'",
        code: `
          int i = 0;
          while(i < 5){
            i++;
          }
        `,
        explanation: "",
        correctAnswer: "for(int i = 0; i < 5; i++){}"
      },
      fb8: {
        question:
          "Convert this for loop to a while loop. Answer should be in the form of 'int x = 5;\\nwhile(x<10){\\n i++}'.",
        code: `
          for(int k = 0; k < 19; k = k + 2){}
        `,
        explanation: "",
        correctAnswer: "int k = 0\\nwhile(k < 19){\\nk = k + 2}"
      },
      fb8: {
        question: "What is printed is the input is 42",
        code: `
        void jabbaTheHutt(int money);

        int main() {
          int units;
          scanf("%d",&units);
          jabbaTheHutt(units);
          printf("I still have %d Imperial Credits", units);
          return 0;
        }

        void jabbaTheHutt(int money){
            printf("You have paid me %d Imperial Credits ", money);
            money = money - 15;
        }
        `,
        explanation: "local variable changes are erased unless returned",
        correctAnswer:
          "You have paid me 42 Imperial Credits I still have 42 Imperial Credits"
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

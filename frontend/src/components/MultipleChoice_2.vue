<template>
    <div class="card my-3">
      <b-card header="<strong>Multiple Choice</strong>">
        <div>
          <div class="mb-3" v-html="question"></div>
        </div>
        <b-list-group v-for="(choice, index) in choices" :key="index">
          <label class="list-group-item list-group-item-action" :for="`choice${choices}${index}`" :class="{'active':chosen === index}">
            <input class="d-none" type="radio" name="options" :id="`choice${choices}${index}`" v-model="chosen" :value="index">{{choice}}
          </label>
        </b-list-group>
        <b-button :disabled="submitDisabled" @click="onSubmit" variant="outline-primary" class="my-3">Submit</b-button>
        <b-alert :show="showAlert" class="my-3" :variant="correct ? 'success' : 'warning'">
          {{msg}}
        </b-alert>
      </b-card>
  </div>
</template>

<script>
const variable_Question_Header = ["Question 2", "Which choice is the proper way to define a constant?", ""];
const variable_Question_Choices = ["#def one","#define one 1","#DEFINE 3","#define ONE 1"];
const variable_Responses = ["#def is incorrect","Although this choice will compile, constants should be writtin in all capital letters with underscores between words","#define, not #DEFINE, and no name is specified",null];
const correct_Answer = 3;

export default {
  name: variable_Question_Header[0],
  props: {
    question: {
      type: String,
      required: true,
      default: "<p><strong>" + variable_Question_Header[1] + "</strong></p>" +
        "<code>" + variable_Question_Header[2] + "</code>"
    },
    choices: {
      type: Array,
      required: true,
      default: function() {
        return [
          variable_Question_Choices[0],
          variable_Question_Choices[1],
          variable_Question_Choices[2],
          variable_Question_Choices[3]
        ]
      }
    },
    explanations: {
      type: Array,
      required: true,
      default: function() {
        return [
          variable_Responses[0],
          variable_Responses[1],
          variable_Responses[2],
          variable_Responses[3]
        ]
      }
    },
    correctChoice: {
      type: Number,
      required: true,
      default: correct_Answer
    }
  },
  data() {
    return {
      showAlert: false,
      chosen: null,
      msg: null,
      correct: false,
      submitDisabled: true
    }
  },
  methods: {
    onSubmit: function() {
      this.correct = this.chosen === this.correctChoice
      this.msg = this.correct ? "Correct. " : "Please try again. "
      if (this.explanations[this.chosen]) {
        this.msg += this.explanations[this.chosen]
      }
      this.showAlert = true
    }
  },
  watch: {
    chosen: function() {
      this.showAlert = false
      this.submitDisabled = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item .active {
}
</style>

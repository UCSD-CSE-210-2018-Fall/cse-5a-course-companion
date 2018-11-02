<template>
    <div class="card my-3">
      <b-card header="<strong>Fill in the Blank</strong>">
        <div>
          <div class="mb-3" v-html="question"></div>
        </div>
        <b-form>
          <b-form-group label="Answer" label-for="input" :invalid-feedback="invalidFeedback" :state="state">
            <b-form-input id="input" v-model="answer" required></b-form-input>
          </b-form-group>
          <b-button :disabled="!state" @click="onSubmit" type="submit" variant="outline-primary" class="my-3">Submit</b-button>
        </b-form>
        <b-alert :show="showAlert" class="my-3" :variant="correct ? 'success' : 'warning'">
          {{msg}}
        </b-alert>
      </b-card>
  </div>
</template>

<script>
export default {
  name: "FillBlank",
  props: {
    question: {
      type: String,
      required: true,
      default: `<p><strong>What is the 3rd line (counting from 1) printed in the following block of statements?</strong></p>
<pre><code>int i = 1;
int j = 6;
while (i < j) {
  printf("%d %d\\n", i, j - i);
  ++i;
}
</code></pre>`
    },
    explanation: {
      type: String,
      required: true,
      default:
        "Consider the change of i at the end of each iteration and the print format. "
    },
    correctAnswer: {
      required: true,
      default: "3 3"
    }
  },
  data() {
    return {
      showAlert: false,
      msg: null,
      correct: false,
      answer: ""
    }
  },
  computed: {
    state() {
      return this.answer.length > 0
    },
    invalidFeedback() {
      if (this.answer.length < 1) {
        return "Please enter your answer"
      }
    }
  },
  methods: {
    onSubmit: function(evt) {
      evt.preventDefault()
      this.correct = this.answer.trim() === this.correctAnswer
      this.msg = this.correct ? "Correct. " : "Please try again. "
      if (!this.correct && this.explanation) {
        this.msg += this.explanation
      }
      this.showAlert = true
    }
  },
  watch: {
    answer: function() {
      this.showAlert = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item .active {
}
</style>

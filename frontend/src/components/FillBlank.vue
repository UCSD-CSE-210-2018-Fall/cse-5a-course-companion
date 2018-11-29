<template>
  <div class="card fill-blank h-100">
    <b-card class=" h-100">
      <div>
        <div class="mb-3">
          <p>
            <strong>{{ question }}</strong>
          </p>
          <pre v-if="code"><code>{{code}}</code></pre>
        </div>
      </div>
      <b-form>
        <b-form-group
          label="Answer"
          label-for="input"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input id="input" v-model="answer" required></b-form-input>
        </b-form-group>
        <b-button
          :disabled="!state"
          @click="onSubmit"
          type="submit"
          variant="outline-primary"
          class="my-3"
          >Submit</b-button
        >
      </b-form>
      <b-alert
        :show="showAlert"
        class="my-3"
        :variant="correct ? 'success' : 'warning'"
      >
        {{ msg }}
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
      required: true
    },
    code: {
      type: String
    },
    explanation: {
      type: String,
      required: true
    },
    correctAnswer: {
      required: true
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
<style scoped></style>

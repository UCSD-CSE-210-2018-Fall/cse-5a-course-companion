<template>
  <div class="card my-3 multiple-choice">
    <b-card header="<strong>Multiple Choice</strong>">
      <div>
        <div class="mb-3">
          <p>
            <strong>{{ question }}</strong>
          </p>
          <pre v-if="code"><code>{{code}}</code></pre>
        </div>
      </div>
      <b-list-group v-for="(choice, index) in choices" :key="index">
        <label
          class="list-group-item list-group-item-action"
          :for="`${uuid}choice${index}`"
          :class="{ active: chosen === index }"
        >
          <input
            class="d-none"
            type="radio"
            name="options"
            :id="`${uuid}choice${index}`"
            v-model="chosen"
            :value="index"
          />{{ choice }}
        </label>
      </b-list-group>
      <b-button
        :disabled="submitDisabled"
        @click="onSubmit"
        variant="outline-primary"
        class="my-3"
        >Submit</b-button
      >
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
import { uuid } from "vue-uuid"

export default {
  name: "MultipleChoice",
  props: {
    question: {
      type: String,
      required: true
    },
    code: {
      type: String
    },
    choices: {
      type: Array,
      required: true
    },
    explanations: {
      type: Array,
      required: true
    },
    correctChoice: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      uuid: uuid.v4(),
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
<style scoped></style>

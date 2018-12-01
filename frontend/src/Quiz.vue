<template>
  <div>
    <h2 class="my-5">{{ quiz.name }} Quiz</h2>
    <p>Don't be afraid to try an answer. Hints are available.</p>
    <h3 class="my-4">Multiple Choice Questions</h3>
    <b-row>
      <b-col class="my-3" md="6" v-for="(mc, index) in mcs" :key="index">
        <MultipleChoice v-bind="mc"></MultipleChoice>
      </b-col>
    </b-row>
    <h3 class="my-4">Fill in the Blank Questions</h3>
    <b-row>
      <b-col class="my-3" md="6" v-for="(fb, index) in fbs" :key="index">
        <FillBlank v-bind="fb"></FillBlank>
      </b-col>
    </b-row>
    <h3 class="my-4">Code Exercises</h3>
    <b-row>
      <b-col class="my-3" md="12" v-for="(repl, index) in repls" :key="index">
        <REPL v-bind="repl"></REPL>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { API } from "./api"
import MultipleChoice from "./components/MultipleChoice.vue"
import FillBlank from "./components/FillBlank.vue"
import REPL from "./components/REPL.vue"

export default {
  name: "Quiz",
  data() {
    return {
      quiz: null,
      mcs: null,
      fbs: null,
      repls: null
    }
  },
  mounted() {
    API.get(`quizzes/${this.$route.params.id}`).then(
      response => (this.quiz = response.data)
    )
    API.get(`quizzes/${this.$route.params.id}/MCs`).then(
      response => (this.mcs = response.data)
    )
    API.get(`quizzes/${this.$route.params.id}/FBs`).then(
      response => (this.fbs = response.data)
    )
    API.get(`quizzes/${this.$route.params.id}/REPLs`).then(
      response => (this.repls = response.data)
    )
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
<style scoped></style>

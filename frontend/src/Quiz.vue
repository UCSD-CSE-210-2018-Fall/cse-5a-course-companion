<template>
  <div>
    <h2>Quiz prototype</h2>
    <b-row class="justify-content-center">
      <b-col md="6">
        <MultipleChoice></MultipleChoice>
      </b-col>
      <b-col md="6">
        <FillBlank></FillBlank>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MultipleChoice from "./components/MultipleChoice.vue"
import FillBlank from "./components/FillBlank.vue"

export default {
  name: "Quiz",
  data() {
    return {}
  },
  components: {
    MultipleChoice,
    FillBlank
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

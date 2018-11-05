<template>
  <div>
    <h2>Quiz prototype</h2>
    <b-row class="justify-content-center">
   
       <b-col md="6">
        <MultipleChoice></MultipleChoice>
      </b-col>
       <b-col md="6">
        <MultipleChoice_2></MultipleChoice_2>
      </b-col>
       <b-col md="6">
        <MultipleChoice_3></MultipleChoice_3>
      </b-col>
       <b-col md="6">
        <MultipleChoice_4></MultipleChoice_4>
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
import MultipleChoice_2 from "./components/MultipleChoice_2.vue"
import MultipleChoice_3 from "./components/MultipleChoice_3.vue"
import MultipleChoice_4 from "./components/MultipleChoice_4.vue"

export default {
  name: "Quiz",
  data() {
    return {}
  },
  components: {
    MultipleChoice,
    MultipleChoice_2,
    MultipleChoice_3,
    MultipleChoice_4,
    FillBlank
    
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

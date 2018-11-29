<template>
  <div>
    <h2>Quizzes</h2>
    <p v-if="error">{{ error }}</p>
    <ul class="list-unstyled">
      <li v-for="(quiz, index) in quizzes" :key="index">
        <router-link
          :to="`quizzes/${quiz._id}`"
          class="btn btn-outline-dark my-2"
          >{{ quiz.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { API } from "./api"

export default {
  name: "Quizzes",
  data() {
    return {
      quizzes: null,
      error: null
    }
  },
  mounted() {
    API.get(`quizzes`)
      .then(response => (this.quizzes = response.data))
      .catch(() => (this.error = "API error, please try again later. "))
  },
  components: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

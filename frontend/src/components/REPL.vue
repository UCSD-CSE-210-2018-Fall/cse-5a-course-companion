<template>
  <div class="card my-3">
    <b-card header="<strong>Code Exercise</strong>">
      <div class="mb-3" v-if="question">
        <p><strong>{{question}}</strong></p>
      </div>
      <iframe class="repl" v-bind:height="`${height}px`" width="100%" v-bind:src="`https://repl.it/${user}/${id}?lite=true`" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "REPL",

  props: {
    question: {
      type: String
    },
    user: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 600
    }
  },
  data() {
    // variables here
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

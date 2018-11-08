<template>
  <div>
    <header></header>
    <b-container id="app"><router-view></router-view></b-container>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Header from "./components/Header.vue"

export default {
  name: "app",
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>

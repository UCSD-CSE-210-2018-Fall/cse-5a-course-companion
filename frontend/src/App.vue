<template>
  <div>
    <Navbar></Navbar>
    <b-container id="app"><router-view></router-view></b-container>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Navbar from "./components/Navbar.vue"

export default {
  name: "app",
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>

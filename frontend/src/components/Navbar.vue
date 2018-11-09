<template>
  <b-navbar class="mb-5" toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">CSE 5A Course Companion</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/" exact>Home</b-nav-item>
        <b-nav-item to="/quiz">Quiz</b-nav-item>
      </b-navbar-nav>
      <!--
        Right aligned nav items
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
      -->
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

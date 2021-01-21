<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  created() {
    this.interceptorRequest()
    this.interceptorResponse()
  },
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse'])
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.swal2-title,
.swal2-html-container,
.swal2-confirm,
.swal2-deny {
  font-family: 'Poppins', sans-serif;
}
</style>

<template>
  <div class="LoginPage">
    <b-container>
      <b-row>
        <b-col>
          <LoginComponent />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import LoginComponent from '../../components/_base/Login/loginComponent'
export default {
  name: 'LoginPage',
  components: {
    LoginComponent
  }
}
</script>
<style scoped>
.LoginPage {
  height: 100vh;
  max-height: 200vh;
  background: #e5e5e5;
}
@media (max-width: 576px) {
  .LoginPage {
    height: auto;
    max-height: 200vh;
  }
}
</style>

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
  background: #e5e5e5;
}
</style>

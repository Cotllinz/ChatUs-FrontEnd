<template>
  <div class="signUp">
    <b-container>
      <b-row>
        <b-col>
          <signUp />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import signUp from '../../components/_base/signUp/signUpComponent'
export default {
  name: 'Signup',
  components: {
    signUp
  }
}
</script>
<style scoped>
.signUp {
  background: #e5e5e5;
}
</style>

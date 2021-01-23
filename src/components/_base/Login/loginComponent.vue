<template>
  <main class="login_component">
    <div class="card__login">
      <div class="body_cardLogin p-3 p-lg-4">
        <h3 class="text-center title__login pt-4 pt-lg-3 mb-4 mb-lg-4 pb-lg-2">
          Login Chat.us
        </h3>
        <p class="pl-lg-5 pl-2 title_hello">Hi, Welcome back!</p>
        <b-form
          @submit.prevent="onSubmit"
          class="d-flex px-2 px-lg-5 flex-column"
        >
          <b-form-group id="Email" label-for="Email">
            <label label-for="Email">Email</label>
            <b-form-input
              id="input-email"
              type="email"
              class="login_form"
              v-model="form.userEmail"
              autocomplete="off"
              placeholder="Enter your email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="Password">
            <label label-for="Password">Password</label>
            <b-form-input
              id="input-Password"
              type="password"
              v-model="form.userPassword"
              class="login_form"
              placeholder="Enter your password"
              required
            ></b-form-input>
          </b-form-group>
          <router-link
            to="/forgot"
            class="ml-auto mb-4 mt-2 mb-lg-4 mt-lg-2 forgot_btn"
            tag="a"
            >Forgot password?</router-link
          >
          <button type="submit" class="btn_login py-3 py-lg-3">Login</button>
          <p class="mt-lg-4 mt-4 mb-4 mb-lg-4 lim">Login with</p>
          <button type="button" class="btn_goggle py-3 py-lg-3">Google</button>
          <p class="text-center sign_up mt-4 mt-lg-4">
            Don’t have an account?
            <router-link tag="a" to="/signup">Sign Up</router-link>
          </p>
        </b-form>
      </div>
    </div>
  </main>
</template>
<script>
import { mapActions } from 'vuex'
import AlertMixins from '../../../mixins/alert'
export default {
  name: 'formLogin',
  mixins: [AlertMixins],
  data() {
    return {
      form: {
        userEmail: '',
        userPassword: ''
      }
    }
  },
  methods: {
    ...mapActions(['loginAccount']),
    onSubmit() {
      this.loginAccount(this.form)
        .then(result => {
          this.AlertSuccesLogin(result.data.data.userName).then(res => {
            if (res) {
              this.$router.push('/home')
            }
          })
        })
        .catch(err => {
          this.AlertErrorLogin(err.data.massage)
        })
    }
  }
}
</script>
<style scoped>
.body_cardLogin {
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  margin: 10% auto 0% auto;
}
.title_hello {
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.btn_login {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  background: #7e98df;
  border-radius: 50px;
  color: #ffffff;
  border: none;
  outline: none;
}
.btn_login:hover {
  background: #5e81e2;
}
.btn_goggle {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  border-radius: 50px;
  color: #7e98df;
  border: 1px solid#7e98df;
  background: none;
  outline: none;
  font-size: 16px;
}
.btn_goggle {
  border: 1px solid #5e81e2;
  color: #5e81e2;
}
.sign_up {
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
}
.sign_up a {
  text-decoration: none;
}
.forgot_btn {
  color: #7e98df;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
}
.forgot_btn:hover {
  color: #4770e0;
}
.login_form {
  font-family: 'Rubik', sans-serif;
  border: none;
  border-bottom: 1px solid #000;
  padding: 0 !important;
  font-size: 17px;
}
.title__login {
  font-family: 'Rubik', sans-serif;
  color: #7e98df;
  font-weight: 500;
}
.lim {
  display: flex;
  align-items: center;
  text-align: center;
  color: #848484;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  text-decoration: none;
}
label {
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
}
.lim::before,
.lim::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #848484;
}
.lim::before {
  margin-right: 2em;
}
.lim::after {
  margin-left: 2em;
}
@media (max-width: 576px) {
  .body_cardLogin {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
    border-radius: 20px;
    margin: 35% 0;
  }
}
</style>

<template>
  <main class="signUp_component">
    <div class="card__signUp">
      <div class="body_cardSignup p-4 p-lg-4">
        <div iv class="d-flex">
          <img
            src="../../../assets/images/icons/back.svg"
            @click="handleBack"
            class="icon_back"
            alt="back_icons"
          />
          <h3 class="title__signUp pt-3 mb-5 pt-lg-3 mb-lg-4 pb-lg-2">
            Register
          </h3>
        </div>
        <p class="pl-lg-5 pl-2 title_hello">Let’s create your account!</p>
        <b-form
          @submit.prevent="onSubmitRegis"
          class="d-flex px-lg-5 px-2 flex-column"
        >
          <b-form-group id="Name" label-for="Name">
            <label label-for="Name">Name</label>
            <b-form-input
              id="input-Name"
              type="text"
              v-model="form.userName"
              class="signUp__form"
              autocomplete="off"
              placeholder="Enter your Name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="Email" label-for="Email">
            <label label-for="Email">Email</label>
            <b-form-input
              id="input-Email"
              type="email"
              v-model="form.userEmail"
              class="signUp__form"
              autocomplete="off"
              placeholder="Enter your Email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="Password">
            <label label-for="Password">Password</label>
            <b-form-input
              id="input-Password"
              type="password"
              v-model="form.userPassword"
              class="signUp__form"
              placeholder="Enter your password"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="confirmPassword">
            <label label-for="confirmPassword">Confirm Password</label>
            <b-form-input
              id="input-confirmPassword"
              type="password"
              v-model="confirmPassword"
              class="signUp__form"
              placeholder="Confirm your password"
              required
            ></b-form-input>
          </b-form-group>
          <button type="submit" class="btn_register py-3 mt-4 mt-lg-3 py-lg-3">
            Register
          </button>
          <p class="mt-lg-4 mt-4 mb-4 mb-lg-4 lim">Register with</p>
          <button type="button" class="btn_goggle py-3 mb-4 mb-lg-4 py-lg-3">
            <b-icon icon="google" aria-hidden="true"></b-icon>  Google
          </button>
        </b-form>
      </div>
    </div>
  </main>
</template>
<script>
import { mapActions } from 'vuex'
import AlertMixins from '../../../mixins/alert'
export default {
  name: 'signUpComponent',
  mixins: [AlertMixins],
  data() {
    return {
      form: {
        userName: '',
        userEmail: '',
        userPassword: ''
      },
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions(['registerAccount']),
    handleBack() {
      this.$router.push('/')
    },
    onSubmitRegis() {
      if (this.confirmPassword === this.form.userPassword) {
        this.registerAccount(this.form)
          .then(result => {
            this.AlertSuccessRegister(result.data.massage).then(res => {
              if (res) {
                this.$router.push('/')
              }
            })
          })
          .catch(err => {
            this.AlertErrorRegister(err.data.massage)
          })
      } else {
        this.AlertErrorRegister()
      }
    }
  }
}
</script>
<style scoped>
.body_cardSignup {
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  margin: 5% auto 5% auto;
}
.title_hello {
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.btn_register {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  background: #7e98df;
  border-radius: 50px;
  color: #ffffff;
  border: none;
  outline: none;
}
.icon_back {
  margin-top: -18px;
  cursor: pointer;
}
.btn_register:hover {
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

.signUp__form {
  font-family: 'Rubik', sans-serif;
  border: none;
  border-bottom: 1px solid #000;
  padding: 0 !important;
  font-size: 17px;
}
.title__signUp {
  margin: 0 auto;
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
  .body_cardSignup {
    width: 100%;
    margin: 16.5% 0;
  }
  .icon_back {
    margin-top: -35px;
    cursor: pointer;
  }
}
</style>

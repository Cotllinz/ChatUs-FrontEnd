<template>
  <div class="forgot">
    <b-container>
      <b-row>
        <b-col>
          <main class="signUp_component">
            <div class="body_cardforgot">
              <div class="body_cardLogin p-4 p-lg-4">
                <div iv class="d-flex">
                  <h3 class="title__forgot pt-3 mb-4 pt-lg-3 mb-lg-4 pb-lg-2">
                    Reset password
                  </h3>
                </div>
                <p class="pl-lg-5 pl-2 title_hello">
                  You need to change your password to activate your account
                </p>
                <b-form
                  @submit.prevent="onReset"
                  class="d-flex px-lg-5 px-2 flex-column"
                >
                  <b-form-group id="Password">
                    <label label-for="Password">Password</label>
                    <b-form-input
                      id="input-Password"
                      type="password"
                      v-model="form.newPassword"
                      class="forgot__form"
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
                      class="forgot__form"
                      placeholder="Confirm your password"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <button
                    type="submit"
                    class="btn_send mt-4 py-3 mt-lg-3 py-lg-3"
                  >
                    Change Password
                  </button>
                </b-form>
              </div>
            </div>
          </main>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import alertMixins from '../../mixins/alert'
export default {
  name: 'forgotSend',
  mixins: [alertMixins],
  data() {
    return {
      form: {
        tokenForgot: this.$route.params.tokenID,
        newPassword: ''
      },
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions(['updateForgotPass']),
    onReset() {
      if (this.confirmPassword === this.form.newPassword) {
        this.updateForgotPass(this.form)
          .then(result => {
            this.AlertSuccessSend(result.data.massage).then(res => {
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
.forgot {
  background: #e5e5e5;
}
.body_cardforgot {
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  height: 690px;
  margin: 10% auto 10% auto;
}
.title_hello {
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.btn_send {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  background: #7e98df;
  border-radius: 50px;
  color: #ffffff;
  border: none;
  outline: none;
}
.btn_send:hover {
  background: #5e81e2;
}

.forgot__form {
  font-family: 'Rubik', sans-serif;
  border: none;
  border-bottom: 1px solid #000;
  padding: 0 !important;
  font-size: 17px;
}
.title__forgot {
  margin: 0 auto;
  font-family: 'Rubik', sans-serif;
  color: #7e98df;
  font-weight: 500;
}

label {
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
}
@media (max-width: 576px) {
  .body_cardforgot {
    width: 100%;
    margin: 26.5% 0;
  }
}
</style>

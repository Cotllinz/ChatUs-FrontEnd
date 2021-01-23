<template>
  <div class="forgot">
    <b-container>
      <b-row>
        <b-col>
          <main class="signUp_component">
            <div class="body_cardforgot">
              <div class="body_cardLogin p-4 p-lg-4">
                <div iv class="d-flex">
                  <img
                    src="../../assets/images/icons/back.svg"
                    @click="handleBack"
                    class="icon_back"
                    alt="back_icons"
                  />
                  <h3 class="title__forgot pt-4 mb-4 pt-lg-3 mb-lg-4 pb-lg-2">
                    Forgot Password
                  </h3>
                </div>
                <p class="pl-lg-5 pl-2 title_hello">
                  You’ll get messages soon on your e-mail
                </p>
                <b-form
                  @submit.prevent="onSend"
                  class="d-flex px-lg-5 px-2 flex-column"
                >
                  <b-form-group id="Email" label-for="Email">
                    <label label-for="Email">Email</label>
                    <b-form-input
                      id="input-Email"
                      type="email"
                      v-model="form.userEmail"
                      class="forgot__form"
                      autocomplete="off"
                      placeholder="Enter your Email"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <button
                    type="submit"
                    class="btn_send mt-3 py-3 mt-lg-3 py-lg-3"
                  >
                    Send
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
        userEmail: ''
      }
    }
  },
  methods: {
    ...mapActions(['sendEmailForgotPass']),
    handleBack() {
      this.$router.push('/')
    },
    onSend() {
      this.sendEmailForgotPass(this.form)
        .then(result => {
          this.AlertSuccessSend(result.data.massage)
        })
        .catch(err => {
          this.AlertErrorRegister(err.data.massage)
        })
    }
  }
}
</script>
<style scoped>
.forgot {
  height: 100vh;
  max-height: 100vh;
  background: #e5e5e5;
}
.body_cardforgot {
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
  height: 640px;
  margin: 10% auto 0 auto;
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
.icon_back {
  margin-top: -18px;
  cursor: pointer;
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
  .forgot {
    height: 105vh;
    max-height: 200vh;
  }
  .body_cardforgot {
    margin-top: 25%;
    margin-bottom: 10%;
    width: 100%;
  }
  .icon_back {
    margin-top: 0;
  }
}
@media (max-width: 375px) {
  .forgot {
    height: auto;
  }
  .body_cardforgot {
    margin-bottom: 25%;
    width: 100%;
  }
}
</style>

<template>
  <div class="ConfirmEmail">
    <b-container>
      <b-row>
        <b-col>
          <main class="signUp_component">
            <div class="body_cardConfirm">
              <div class="body_cardConfirms p-4 p-lg-4">
                <div iv class="d-flex">
                  <h3 class="title__Confirm pt-4 mb-4 pt-lg-3 mb-lg-4 pb-lg-2">
                    Activation Account
                  </h3>
                </div>
                <p class="text-center mb-4 mb-lg-0 title_hello">
                  Click this button for activate your account
                </p>
                <b-form
                  @submit.prevent="onConfirm"
                  class="d-flex px-lg-5 flex-column"
                >
                  <button type="submit" class="btn_send py-3 mt-lg-3 py-lg-3">
                    Activation Account
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
  name: 'ConfirmEmail',
  mixins: [alertMixins],
  data() {
    return {
      token: this.$route.params.TokenConfirm
    }
  },
  methods: {
    ...mapActions(['confirmEmail']),
    onConfirm() {
      this.confirmEmail(this.token)
        .then(result => {
          this.AlertSuccessSend(result.data.massage).then(res => {
            if (res) {
              this.$router.push('/')
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
.ConfirmEmail {
  background: #e5e5e5;
}
.body_cardConfirm {
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

.title__Confirm {
  margin: 0 auto;
  font-family: 'Rubik', sans-serif;
  color: #7e98df;
  font-weight: 500;
}
@media (max-width: 576px) {
  .body_cardConfirm {
    width: 100%;
    margin: 26.5% 0;
  }
}
</style>

<template>
  <b-modal id="modal_editpass" @hidden="resetModal" centered hide-footer>
    <template #modal-title>
      <h4 class="modal_phone ">
        Change your Password
      </h4>
    </template>
    <b-form @submit.prevent="sendData">
      <div class="form_phone">
        <label for="phone">New Password</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <template #prepend>
            <b-input-group-text class="key_pass">
              <b-icon icon="key" font-scale="1.5" aria-hidden="true"></b-icon
            ></b-input-group-text>
          </template>
          <b-form-input
            type="password"
            required
            v-model="form.newPassword"
            class="shadow-none"
            placeholder="Type your new password ..."
          ></b-form-input>
        </b-input-group>
        <label class="mt-lg-3 mt-3" for="phone">Confirm Password</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <template #prepend>
            <b-input-group-text class="key_passconfrim">
              <b-icon
                icon="key-fill"
                style="color: #5e81e2;"
                font-scale="1.5"
                aria-hidden="true"
              ></b-icon
            ></b-input-group-text>
          </template>
          <b-form-input
            type="password"
            required
            v-model="confirmPassword"
            class="shadow-none"
            placeholder="Confirm again your password ..."
          ></b-form-input>
        </b-input-group>
      </div>
      <button class="mt-4 py-lg-2 py-2 btn-confirm w-100" type="submit">
        Confirm
      </button>
      <button
        type="button"
        class="mt-3 btn-cancel py-2 py-lg-2 w-100"
        @click="$bvModal.hide('modal_editpass')"
      >
        Cancel
      </button>
    </b-form>
  </b-modal>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Alert from '../../../mixins/alert'
export default {
  name: 'ModalPhone',
  mixins: [Alert],
  data() {
    return {
      form: {
        newPassword: ''
      },
      confirmPassword: ''
    }
  },
  computed: {
    ...mapGetters({ Id: 'getId' })
  },
  methods: {
    ...mapActions(['updatePassword']),
    sendData() {
      if (this.confirmPassword === this.form.newPassword) {
        const sendData = {
          Id: this.Id,
          Data: this.form
        }
        this.updatePassword(sendData).then(result => {
          this.AlertSuccess(result.data.massage).then(() => {
            this.$nextTick(() => {
              this.$bvModal.hide('modal_editpass')
            })
          })
        })
      } else {
        this.AlertError('Password Not Match')
      }
    },
    resetModal() {
      this.form.newPassword = ''
      this.confirmPassword = ''
    }
  }
}
</script>
<style scoped>
.modal_phone {
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}
label {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
.btn-confirm {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  background: #7e98df;
  border-radius: 10px;
  color: #ffffff;
  border: none;
  outline: none;
}
.btn-confirm:hover {
  background: #5e81e2;
}
.btn-cancel {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  border-radius: 10px;
  color: #7e98df;
  border: 1px solid#7e98df;
  background: none;
  outline: none;
  font-size: 16px;
}
.btn-cancel:hover {
  border: 1px solid #5e81e2;
  color: #5e81e2;
}
input[type='password'] {
  font-family: 'Poppins', sans-serif;
  outline: none;
  padding: 5px;
  height: 45px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: none !important;
  border: 1px solid #ccc;
  border-left: none;
}
/deep/ .modal-content {
  border-radius: 20px;
}
</style>

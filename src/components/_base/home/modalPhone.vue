<template>
  <b-modal id="modal_phone" @show="GetData" centered hide-footer>
    <template #modal-title>
      <h4 class="modal_phone ">
        Update Your Phone Number
      </h4>
    </template>
    <b-form @submit.prevent="sendData">
      <div class="form_phone">
        <label for="phone">Phone Number</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <template #prepend>
            <b-input-group-text class="search_btn">
              <b-icon
                icon="phone"
                style="color: #5e81e2;"
                font-scale="1.5"
                aria-hidden="true"
              ></b-icon
            ></b-input-group-text>
          </template>
          <b-form-input
            required
            type="tel"
            pattern="[0-9]{12}"
            maxlength="12"
            v-model="form.phoneNumber"
            class="shadow-none"
            placeholder="Type your phone number ..."
          ></b-form-input>
        </b-input-group>
      </div>
      <button class="mt-3 py-lg-2 btn-confirm w-100" type="submit">
        Confirm
      </button>
      <button
        type="button"
        class="mt-3 btn-cancel py-lg-2 w-100"
        @click="$bvModal.hide('modal_phone')"
      >
        Cancel
      </button>
    </b-form>
  </b-modal>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ModalPhone',
  data() {
    return {
      form: {
        phoneNumber: ''
      }
    }
  },
  computed: {
    ...mapGetters({ Id: 'getId', Myemail: 'getEmail' })
  },
  methods: {
    ...mapActions(['updatePhone', 'getDataUser']),
    sendData() {
      const setData = {
        Id: this.Id,
        form: this.form
      }
      this.updatePhone(setData)
    },
    GetData() {
      const form = {
        userEmail: this.Myemail
      }
      this.getDataUser(form).then(result => {
        this.form.phoneNumber = result.data.data[0].phone_number
      })
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
input[type='tel'] {
  font-family: 'Poppins', sans-serif;
  outline: none;
  padding: 5px;
  height: 40px;
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

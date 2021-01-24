<template>
  <b-modal @show="GetData" id="modal_account" centered hide-footer>
    <template #modal-title>
      <h4 class="modal_phone ">
        Edit your profile
      </h4>
    </template>
    <b-form @submit.prevent="sendData">
      <div class="text-center mt-lg-4 mb-lg-3">
        <img
          v-if="url"
          :src="url"
          class="style__image mb-lg-3"
          alt="image__account"
        />
        <input id="fileUpload" type="file" @change="onFileChange" hidden />
        <b-col lg="12">
          <button
            type="button"
            class="mt-3 btn_upload py-lg-2 w-50"
            @click="chooseFiles"
          >
            Choose Photo
          </button>
        </b-col>
      </div>
      <div class="form_phone">
        <label for="username">Username</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <template #prepend>
            <b-input-group-text>
              <b-icon
                icon="person"
                style="color: #5e81e2;"
                font-scale="1.5"
                aria-hidden="true"
              ></b-icon
            ></b-input-group-text>
          </template>
          <b-form-input
            type="text"
            maxlength="10"
            v-model="form.userName"
            autocomplete="off"
            required
            class="shadow-none"
            placeholder="Type your username ..."
          ></b-form-input>
        </b-input-group>
        <label class="mt-lg-3" for="fullname">Fullname</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <template #prepend>
            <b-input-group-text>
              <b-icon
                icon="people"
                style="color: #5e81e2;"
                font-scale="1.5"
                aria-hidden="true"
              ></b-icon
            ></b-input-group-text>
          </template>
          <b-form-input
            type="text"
            required
            autocomplete="off"
            v-model="form.fullName"
            maxlength="20"
            class="shadow-none"
            placeholder="Type your fullname ..."
          ></b-form-input>
        </b-input-group>
        <label class="mt-lg-3" for="bio">Bio</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <template #prepend>
            <b-input-group-text>
              <b-icon
                icon="clipboard"
                style="color: #5e81e2;"
                font-scale="1.5"
                aria-hidden="true"
              ></b-icon
            ></b-input-group-text>
          </template>
          <b-form-input
            type="text"
            required
            autocomplete="off"
            v-model="form.bioGrap"
            class="shadow-none"
            placeholder="Type your bio ..."
          ></b-form-input>
        </b-input-group>
      </div>
      <button class="mt-4 py-lg-2 btn-confirm w-100" type="submit">
        Confirm
      </button>
      <button
        type="button"
        class="mt-3 btn-cancel py-lg-2 w-100"
        @click="$bvModal.hide('modal_account')"
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
      url: null,
      form: {
        fullName: '',
        userName: '',
        bioGrap: '',
        userImage: ''
      }
    }
  },
  computed: {
    ...mapGetters({ Myemail: 'getEmail' })
  },
  methods: {
    ...mapActions(['updateUser', 'getDataUser']),
    chooseFiles() {
      document.getElementById('fileUpload').click()
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.form.userImage = file
      this.url = URL.createObjectURL(file)
    },
    sendData() {
      /* Alert Ditambahkan */
      const { fullName, userName, bioGrap, userImage } = this.form
      const dataSendAccount = new FormData()
      dataSendAccount.append('fullName', fullName)
      dataSendAccount.append('userName', userName)
      dataSendAccount.append('bioGrap', bioGrap)
      dataSendAccount.append('userImage', userImage)
      const updateAccout = {
        form: dataSendAccount,
        email: this.Myemail
      }
      this.updateUser(updateAccout)
    },
    GetData() {
      const form = {
        userEmail: this.Myemail
      }
      this.getDataUser(form).then(result => {
        this.form.fullName = result.data.data[0].fullname
        this.form.userName = result.data.data[0].username
        this.form.bioGrap = result.data.data[0].bio
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
.btn_upload {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  background: #39b3ca;
  border-radius: 10px;
  color: #ffffff;
  border: none;
  outline: none;
}
.btn_upload:hover {
  background: #2ec4e2;
}
.style__image {
  width: 100px;
  height: 100px;
  border-radius: 30px;
  object-fit: cover;
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
input[type='text'] {
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

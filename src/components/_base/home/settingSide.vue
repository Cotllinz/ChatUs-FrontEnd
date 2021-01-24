<template>
  <div class="setting_side animate__animated animate__zoomInUp">
    <header class="profile_page">
      <div class="d-flex mt-lg-4">
        <img
          style="cursor: pointer;"
          @click="backDisplayhome"
          src="../../../assets/images/icons/back.svg"
          alt="imageBack"
        />
        <h3 class="mr-auto mt-lg-2 ml-auto">@Cotlinz</h3>
      </div>
      <div class="profile text-center mt-lg-5 pt-lg-2">
        <img
          class="profile_pic"
          src="https://images.unsplash.com/photo-1572863141204-83031c77e65a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
          alt="imageProfile"
        />
        <h2 class="mt-lg-3">Gloria Mckinney</h2>
        <p>@wdlam</p>
      </div>
    </header>
    <main>
      <div class="account mt-lg-5">
        <h2>Account</h2>
        <h5 class="mt-lg-4">+375(29)9638433</h5>
        <a class="btn_changephone" @click="$bvModal.show('modal_phone')"
          >Tap to change phone number</a
        >
      </div>
      <!-- Modal Edit Phone Number -->
      <Modalphone />
      <!-- =========================== -->
      <hr class="mr-lg-5" />
      <div class="bio">
        <h3>I’m Senior Frontend Developer from Microsoft</h3>
        <p>Bio</p>
      </div>
      <div class="settings">
        <h2>Settings</h2>
        <button
          @click="$bvModal.show('modal_editpass')"
          class="btn_editPass mt-lg-2 mb-lg-4 w-100"
        >
          <b-icon
            icon="shield-lock"
            class="pr-4"
            style="color: #7E98DF;"
          ></b-icon>
          Edit Password
        </button>
        <!-- Modal Edit Password -->
        <Modalpassword />
        <!-- ====================== -->
        <button
          @click="$bvModal.show('modal_account')"
          class="btn_account w-100 mb-lg-4"
        >
          <b-icon icon="person" class="pr-4" style="color: #7E98DF;"></b-icon>
          Edit Account
        </button>
        <!-- Modal Edit Account -->
        <ModalAccount />
        <!-- ========================= -->
      </div>
    </main>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Modalphone from './modalPhone'
import Modalpassword from './modalPassword'
import ModalAccount from './modalAccount'
export default {
  name: 'SettingSide',
  components: {
    Modalphone,
    Modalpassword,
    ModalAccount
  },
  methods: {
    ...mapMutations(['changeDisplay']),
    backDisplayhome() {
      this.changeDisplay(0)
    }
  }
}
</script>
<style scoped>
.profile_pic {
  width: 100px;
  height: 100px;
  border-radius: 30px;
  object-fit: cover;
}
.profile_page {
  font-family: 'Rubik', sans-serif;
}
.profile_page h3 {
  font-size: 24px;
  color: #7e98df;
}
.profile h2 {
  font-size: 22px;
  margin-bottom: 0;
}
main {
  font-family: 'Poppins', sans-serif;
}
.account h2 {
  font-weight: 700;
  font-size: 19px;
}
.account h5,
a {
  font-size: 16px;
}
.bio h3 {
  font-weight: 700;
  font-size: 16px;
  padding-right: 12px;
}
.bio p {
  font-size: 16px;
  color: #848484;
}
.btn_changephone {
  color: #7e98df;
  text-decoration: none;
  cursor: pointer;
}
.settings h2 {
  font-size: 19px;
  font-weight: 700;
}
.btn_editPass,
.btn_account {
  text-align: left;
  background: none;
  border: none;
  font-size: 16px;
  color: #7e98df;
}
.btn_editPass:hover,
.btn_account:hover,
.account a:hover {
  color: #537df1;
}
</style>

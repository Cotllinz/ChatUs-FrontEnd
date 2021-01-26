<template>
  <div class="menus_card animate__animated animate__fadeIn p-lg-3">
    <b-col cols="12">
      <button @click="changeDisplaymenu(1)" class="btn_setting mt-lg-2 mb-lg-4">
        <b-icon icon="gear" class="pr-4" variant="white"></b-icon> Settings
      </button>
    </b-col>
    <b-col cols="12">
      <button @click="changeDisplaymenu(2)" class="btn_account mb-lg-4">
        <b-icon icon="person" class="pr-4" variant="white"></b-icon> Contacts
      </button>
    </b-col>
    <b-col cols="12">
      <button
        @click="$bvModal.show('modal_addfriend')"
        class="btn_invitefriend mb-lg-4"
      >
        <b-icon icon="person-plus" class="pr-4" variant="white"></b-icon> Invite
        Friends
      </button>
    </b-col>
    <b-col cols="12">
      <button @click="changeDisplaymenu(4)" class="btn_chatusfaq mb-lg-4">
        <b-icon icon="question-circle" class="pr-4" variant="white"></b-icon>
        Chat.us FAQ
      </button>
    </b-col>
    <b-col cols="12">
      <button @click="handleLogout" class="btn_logout">
        <b-icon icon="door-closed-fill" class="pr-4" variant="white"></b-icon>
        Log Out
      </button>
    </b-col>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Menus',
  computed: {
    ...mapGetters({ Myemail: 'getEmail' })
  },
  methods: {
    ...mapMutations(['changeDisplay', 'setCoordinate']),
    ...mapActions(['logout', 'getDataUser']),
    changeDisplaymenu(event) {
      this.changeDisplay(event)
      const form = {
        userEmail: this.Myemail
      }
      this.getDataUser(form).then(result => {
        const setData = {
          lat: Number(result.data.data[0].lat),
          lng: Number(result.data.data[0].long)
        }
        this.setCoordinate(setData)
      })
    },
    handleLogout() {
      this.logout()
    }
  }
}
</script>
<style scoped>
.menus_card {
  top: 55px;
  right: 25px;
  width: 210px;
  height: 270px;
  z-index: 1;
  background: #7e98df;
  border-radius: 35px 10px 35px 35px;
  position: absolute;
}
.btn_setting,
.btn_account,
.btn_invitefriend,
.btn_chatusfaq,
.btn_logout {
  outline: none;
  width: 100%;
  border: none;
  color: #ffffff;
  font-family: 'Rubik', sans-serif;
  background: none;
  text-align: left;
}
.btn_setting,
.btn_account,
.btn_invitefriend,
.btn_chatusfaq {
  border-bottom: 1px solid;
}
</style>

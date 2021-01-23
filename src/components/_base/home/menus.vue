<template>
  <div class="menus_card p-lg-3">
    <b-col cols="12">
      <button class="btn_setting mt-lg-2 mb-lg-4">
        <b-icon icon="gear" class="pr-4" variant="white"></b-icon> Settings
      </button>
    </b-col>

    <b-col cols="12">
      <button class="btn_account mb-lg-4">
        <b-icon icon="person" class="pr-4" variant="white"></b-icon> Contacts
      </button>
    </b-col>
    <b-col cols="12">
      <button class="btn_invitefriend mb-lg-4">
        <b-icon icon="person-plus" class="pr-4" variant="white"></b-icon> Invite
        Friends
      </button>
    </b-col>
    <b-col cols="12">
      <button class="btn_chatusfaq">
        <b-icon icon="question-circle" class="pr-4" variant="white"></b-icon>
        Chat.us FAQ
      </button>
    </b-col>
  </div>
</template>
<script>
export default {
  name: 'Menus'
}
</script>
<style scoped>
.menus_card {
  top: 55px;
  right: 25px;
  width: 210px;
  height: 230px;
  z-index: 1;
  background: #7e98df;
  border-radius: 35px 10px 35px 35px;
  position: absolute;
}
.btn_setting,
.btn_account,
.btn_invitefriend,
.btn_chatusfaq {
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
.btn_invitefriend {
  border-bottom: 1px solid;
}
</style>

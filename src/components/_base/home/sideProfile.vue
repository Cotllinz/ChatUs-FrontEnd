<template>
  <section>
    <div class="d-flex align-items-center title_app mt-lg-4">
      <h2>Chat.us</h2>
      <img
        @click="showMenus"
        class="ml-auto menus_logo"
        src="../../../assets/images/icons/Menu.jpg"
        alt="images_menu"
      />
      <Menus v-if="showMenu === 1" />
      <!-- Modal Add Friend -->
      <Modaladdfriend />
      <!-- ================== -->
    </div>
    <div class="profile text-center mt-lg-5 pt-lg-3">
      <img
        class="img_profile"
        src="https://images.unsplash.com/photo-1572863141204-83031c77e65a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
        alt="image_profile"
      />
      <h2 class="mt-lg-3">Gloria Mckinney</h2>
      <p>@wdiam</p>
    </div>
    <div class="d-flex mt-lg-5">
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <template #prepend>
          <b-input-group-text class="search_btn">
            <b-icon icon="search" font-scale="1.5" aria-hidden="true"></b-icon
          ></b-input-group-text>
        </template>
        <b-form-input
          class="shadow-none"
          placeholder="Type name your friend ..."
        ></b-form-input>
      </b-input-group>
      <b-icon
        icon="plus"
        font-scale="2.5"
        variant="primary"
        aria-hidden="true"
      ></b-icon>
    </div>
    <div class="chat_list mt-lg-3">
      <div class="d-flex mb-lg-3 align-items-center">
        <img
          class="image_friendProfile"
          src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="image_chatfriend"
        />
        <div class="ml-lg-3 name_tag mt-lg-3">
          <h2>Theresa Webb</h2>
          <p class="mt-lg-2">Why did you do that?</p>
        </div>
        <div class="desc_time ml-auto mr-lg-2">
          <h3>15:20</h3>
          <span class="badge">30+</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Menus from './menus'
import Modaladdfriend from './modalAddfriend'
export default {
  name: 'sideProfile',
  components: {
    Menus,
    Modaladdfriend
  },
  data() {
    return {
      showMenu: 0
    }
  },
  methods: {
    showMenus() {
      if (this.showMenu === 0) {
        this.showMenu = 1
      } else {
        this.showMenu = 0
      }
    }
  }
}
</script>
<style scoped>
.title_app h2 {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 29px;
  color: #7e98df;
}
.profile h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 22px;
  margin-bottom: 0;
}
.profile p {
  font-family: 'Rubik', sans-serif;
}
.chat_list {
  height: 46.5vh;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.chat_list::-webkit-scrollbar {
  width: 5px;
}
.chat_list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.chat_list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.img_profile {
  width: 100px;
  height: 100px;
  border-radius: 30px;
  object-fit: cover;
}
.menus_logo {
  width: 40px;
  height: 20px;
  cursor: pointer;
  object-fit: contain;
}
.search_btn {
  border-radius: 10px;
  background: #fafafa;
  border-right: none;
}
input[type='text'] {
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
.image_friendProfile {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  object-fit: cover;
}
.name_tag,
.desc_time {
  font-family: 'Poppins', sans-serif;
}
.name_tag h2 {
  margin-bottom: 0;
  font-weight: 700;
  font-size: 18px;
}
.name_tag p,
.desc_time h3 {
  font-size: 14px;
}
.name_tag p {
  color: #7e98df;
}
.desc_time h3 {
  color: #848484;
}
.badge {
  width: 25px;
  font-size: 10px;
  padding-top: 8px;
  padding-left: 4px;
  height: 25px;
  border-radius: 50%;
  background: #7e98df;
  color: white;
}
</style>

<template>
  <div class="chatlog animate__animated animate__fadeIn">
    <header>
      <div class="d-flex ml-lg-3 mt-lg-1 align-items-center">
        <img
          @click="$bvModal.show('modal_showprofile')"
          class="image_profilechat"
          src="https://images.unsplash.com/photo-1572863141204-83031c77e65a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
          alt=""
        />
        <!-- Modal Profile Chat -->
        <Modalprofilechat />
        <!-- ====================== -->
        <div class="chatname ml-lg-3 mt-lg-4">
          <h3>Mother</h3>
          <p>Online</p>
        </div>
        <img
          class="ml-auto img_icon mt-lg-3 mr-lg-3"
          src="../../../assets/images/icons/Profile menu.jpg"
          alt="images_menu"
        />
      </div>
    </header>
    <main>
      <div v-for="(items, index) in Chat" :key="index" class="chat pt-lg-1">
        <div
          v-if="items.idChat_sender !== Id"
          class="left_chat d-flex ml-lg-3 mt-lg-3 align-items-end"
        >
          <img
            class="photo_chat"
            src="https://images.unsplash.com/photo-1572863141204-83031c77e65a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
            alt="left_chat"
          />
          <p class="ml-lg-2">
            {{ items.chat_text }}
          </p>
        </div>
        <div
          v-if="items.idChat_sender === Id && items.idChat_recaiver !== Id"
          class="right_chat d-flex mr-lg-3 mt-lg-4"
        >
          <p class="ml-auto">
            {{ items.chat_text }}
          </p>
          <img
            class="photo_chat ml-2"
            src="https://images.unsplash.com/photo-1572863141204-83031c77e65a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
            alt="left_chat"
          />
        </div>
      </div>
    </main>
    <section class="typing_msg">
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <template #append>
          <b-input-group-text class="icons_plus">
            <b-icon icon="plus" font-scale="2" aria-hidden="true"></b-icon
          ></b-input-group-text>
          <b-input-group-text class="emoticons">
            <b-icon icon="emoji-laughing-fill" aria-hidden="true"></b-icon
          ></b-input-group-text>
          <b-input-group-text class="send_msg">
            <b-icon icon="arrow-right-square-fill" aria-hidden="true"></b-icon
          ></b-input-group-text>
        </template>
        <b-form-input
          class="shadow-none"
          placeholder="Type your message..."
        ></b-form-input>
      </b-input-group>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Modalprofilechat from './modalProfilechat'
export default {
  name: 'RoomChat',
  components: {
    Modalprofilechat
  },
  computed: {
    ...mapGetters({ Chat: 'getChat', Id: 'getId' })
  }
}
</script>
<style scoped>
header {
  border-bottom: 2px solid rgb(240, 240, 240);
}
main {
  background: #fafafa;
  height: 79vh;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 100vh;
}
svg {
  color: #7e98df;
  cursor: pointer;
  object-fit: contain;
}

.input-group-text {
  padding: 10px 15px;
}
.icons_plus,
.send_msg,
.emoticons {
  background: none;
  background: #fafafa;
}
.icons_plus,
.emoticons {
  border-left: none;
  border-right: none;
}
.send_msg {
  border-radius: 10px;
  border-left: none;
}
input[type='text'] {
  font-family: 'Poppins', sans-serif;
  outline: none;
  height: 55px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: none !important;
  border: 1px solid #ccc;
  border-right: none;
}
main::-webkit-scrollbar {
  width: 5px;
}
main::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
main::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.image_profilechat {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  object-fit: cover;
}
.typing_msg {
  padding: 20px 30px;
}
.chatname {
  font-family: 'Poppins', sans-serif;
}
.chatname h3 {
  font-size: 18px;
  margin-bottom: 0;
}
.left_chat p {
  margin: 0;
  padding: 20px;
  color: #ffffff;
  max-width: 25vw;
  font-family: 'Poppins', sans-serif;
  background: #7e98df;
  border-radius: 35px 35px 35px 10px;
}
.right_chat p {
  margin: 0;
  text-align: right;
  padding: 20px;
  color: #000;
  max-width: 25vw;
  font-family: 'Poppins', sans-serif;
  background: #ffffff;
  border-radius: 35px 10px 35px 35px;
}
.photo_chat {
  width: 40px;
  height: 40px;
  border-radius: 13px;
  object-fit: cover;
}
.chatname p {
  font-size: 15px;
  color: #7e98df;
}
.img_icon {
  height: 15px;
  object-fit: contain;
}
</style>

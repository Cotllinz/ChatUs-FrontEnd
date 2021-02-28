<template>
  <div class="chatlog animate__animated animate__fadeIn">
    <header>
      <div class="d-flex ml-lg-3 ml-3 mt-lg-1 align-items-center">
        <img
          @click="$bvModal.show('modal_showprofile')"
          class="image_profilechat"
          :src="
            Droom.imageUser
              ? `${enviro}${Droom.imageUser}`
              : require('../../../assets/images/icons/imageDefault.jpg')
          "
          alt=""
        />
        <!-- Modal Profile Chat -->
        <Modalprofilechat />
        <!-- ====================== -->
        <div class="chatname ml-lg-3 ml-2 mt-3 mt-lg-4">
          <h3>{{ Droom.userName }}</h3>
          <p>
            {{ Droom.login === '0000-00-00 00:00:00' ? 'Offline' : 'Online' }}
          </p>
        </div>
        <img
          class="ml-auto img_icon mt-lg-3 mt-2 mr-3 mr-lg-3"
          src="../../../assets/images/icons/Profile menu.jpg"
          alt="images_menu"
        />
      </div>
    </header>
    <main id="scroll">
      <div
        v-for="(items, index) in Chat"
        :key="index"
        class="chat pt-1 pt-lg-1"
      >
        <div
          v-if="items.idChat_sender !== Id"
          class="left_chat mb-lg-3 mb-3 d-flex ml-3 ml-lg-3 mt-2 mt-lg-3 align-items-end"
        >
          <img
            class="photo_chat"
            :src="
              Droom.imageUser
                ? `${enviro}${Droom.imageUser}`
                : require('../../../assets/images/icons/imageDefault.jpg')
            "
            alt="left_chat"
          />
          <p class="ml-lg-2 ml-2">{{ items.chat_text }}</p>
        </div>
        <div
          v-if="items.idChat_sender === Id && items.idChat_recaiver !== Id"
          class="right_chat d-flex mr-3 mt-3 mr-lg-3 mt-lg-4"
        >
          <p class="ml-auto">{{ items.chat_text }}</p>
          <img
            :src="
              Account.image_user
                ? `${enviro}${Account.image_user}`
                : require('../../../assets/images/icons/imageDefault.jpg')
            "
            class="photo_chat ml-2"
            alt="left_chat"
          />
        </div>
      </div>
      <p v-if="typing.isTyping" class="mt-2" style="text-align:center">
        <em v-if="typing.username === this.Droom.userName"
          >{{ typing.username }} is typing a message...</em
        >
      </p>
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
          <b-input-group-text @click="sendMessage" class="send_msg">
            <b-icon icon="arrow-right-square-fill" aria-hidden="true"></b-icon
          ></b-input-group-text>
        </template>
        <b-form-input
          class="shadow-none"
          v-model="message"
          autocomplete="off"
          @keyup.enter="sendMessage"
          placeholder="Type your message..."
        ></b-form-input>
      </b-input-group>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Modalprofilechat from './modalProfilechat'
import io from 'socket.io-client'
export default {
  name: 'RoomChat',
  components: {
    Modalprofilechat
  },
  data() {
    return {
      socket: io(`${process.env.VUE_APP_URL_SOCKET}`, {
        path: '/api2/socket.io'
      }),
      enviro: process.env.VUE_APP_URL_IMAGE,
      message: '',
      roomMessage: ''
    }
  },
  watch: {
    message(value) {
      value
        ? this.socket.emit('typing', {
            username: this.MyuserName,
            room: this.Droom.rooms,
            isTyping: true
          })
        : this.socket.emit('typing', {
            room: this.Droom.rooms,
            isTyping: false
          })
    }
  },
  updated() {
    this.scroll()
    if (this.roomMessage !== this.Droom.rooms) {
      this.message = ''
    }
    this.roomMessage = this.Droom.rooms
  },
  created() {
    const form = {
      userEmail: this.Myemail
    }
    this.getDataUser(form)
  },
  computed: {
    ...mapGetters({
      Chat: 'getChat',
      Id: 'getId',
      Account: 'getUserData',
      Myemail: 'getEmail',
      Droom: 'getroomDisplay',
      typing: 'getTyping',
      MyuserName: 'getUsername'
    })
  },
  methods: {
    ...mapActions(['getDataUser', 'postChat', 'GetRoomList']),
    sendMessage() {
      if (this.message.length > 0) {
        const setDataToDatabase = {
          idSender: this.Id,
          idRecaiver: this.Droom.id,
          chatText: this.message
        }
        const sendNotif = {
          username: this.MyuserName,
          room: this.Droom.id,
          notif: true
        }
        this.socket.emit('roomMessage', sendNotif)
        const setDataToSocket = {
          room: this.Droom.rooms,
          idChat_sender: this.Id,
          idChat_recaiver: this.Droom.id,
          chat_text: this.message
        }
        
        this.socket.emit('roomMessage', setDataToSocket)
        this.postChat(setDataToDatabase).then(() => {
          this.GetRoomList(this.Id)
        })
        this.message = ''
      }
    },
    scroll() {
      document.getElementById('scroll').scrollTop = document.getElementById(
        'scroll'
      ).scrollHeight
    }
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

@media (max-width: 576px) {
  .left_chat p {
    max-width: 95vw;
  }
  .right_chat p {
    max-width: 95vw;
  }
}
</style>

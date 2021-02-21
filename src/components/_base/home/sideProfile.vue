<template>
  <section>
    <div class="d-flex align-items-center title_app mt-2 mt-lg-4">
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
    <div class="profile text-center mt-lg-5 mt-5 pt-lg-3">
      <img
        class="img_profile"
        :src="
          Account.image_user
            ? `${this.enviro}${Account.image_user}`
            : require('../../../assets/images/icons/imageDefault.jpg')
        "
        alt="image_profile"
      />
      <h2 class="mt-lg-3 mt-2">
        {{ Account.fullname ? Account.fullname : Account.username }}
      </h2>
      <p>@{{ Account.username }}</p>
    </div>
    <div class="d-flex mt-lg-5 mt-5">
      <b-input-group class="mb-3 mb-lg-2 mr-sm-2 mb-sm-0">
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
    <div class="chat_list mt-2 mt-lg-3">
      <div
        v-for="(items, index) in listRoom"
        :key="index"
        style="cursor: pointer;"
        @click="roomGet(items)"
        class="d-flex mb-lg-3 mb-3 align-items-center"
      >
        <img
          v-if="items.lastChat"
          class="image_friendProfile"
          :src="
            items.image_user
              ? `${enviro}${items.image_user}`
              : require('../../../assets/images/icons/imageDefault.jpg')
          "
          alt="image_chatfriend"
        />
        <div v-if="items.lastChat" class="ml-lg-3 ml-2 name_tag mt-3 mt-lg-3">
          <h2>{{ items.username }}</h2>
          <p class="mt-lg-2 mt-1">{{ sliceChat(items.lastChat.chat_text) }}</p>
        </div>
        <div v-if="items.lastChat" class="desc_time ml-auto mr-2 mr-lg-2">
          <h3>{{ formatTime(items.lastChat.created_at) }}</h3>
          <span v-if="items.unreadmessage[0].total > 0" class="badge">{{
            items.unreadmessage[0].total
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import moment from 'moment'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Menus from './menus'
import Modaladdfriend from './modalAddfriend'
import io from 'socket.io-client'

export default {
  name: 'sideProfile',
  components: {
    Menus,
    Modaladdfriend
  },
  data() {
    return {
      socket: io('http://localhost:3000'),
      showMenu: 0,
      enviro: process.env.VUE_APP_URL,
      room: '',
      oldRoom: ''
    }
  },
  created() {
    const form = {
      userEmail: this.Myemail
    }
    this.getDataUser(form)
    this.GetRoomList(this.Id)
    this.socket.on('chatMessage', data => {
      console.log(data)
      if (data.chat_text) {
        this.setSocketchat(data)
      } else if (data.notif) {
        this.$toasted.success('New message from ' + data.username, {
          duration: 1000
        })
      }
    })
    this.socket.on('typingMessage', data => {
      this.typingMessage(data)
    })
    this.socket.emit('joinRoom', {
      username: this.userName,
      room: this.Id
    })
  },
  computed: {
    ...mapGetters({
      Account: 'getUserData',
      Myemail: 'getEmail',
      Id: 'getId',
      listRoom: 'getRoom',
      userName: 'getUsername'
    })
  },
  methods: {
    ...mapActions(['getDataUser', 'GetRoomList', 'getChat']),
    ...mapMutations([
      'setRoomDisplay',
      'setSocketchat',
      'setDisplayChat',
      'typingMessage'
    ]),
    showMenus() {
      if (this.showMenu === 0) {
        this.showMenu = 1
      } else {
        this.showMenu = 0
      }
    },
    formatTime(value) {
      moment.locale('ID')
      return moment(String(value)).format('LT')
    },
    sliceChat(value) {
      if (value.length > 15) {
        return value.slice(0, 15) + '...'
      } else {
        return value
      }
    },
    roomGet(data) {
      if (this.oldRoom) {
        this.socket.emit('changeRoom', {
          room: data.room_id,
          oldRoom: this.oldRoom
        })
        this.oldRoom = data.room_id
      } else {
        this.socket.emit('joinRoom', {
          room: data.room_id
        })
        this.oldRoom = data.room_id
      }
      const setUserDislay = {
        userName: data.username,
        phoneNumber: data.phone_number,
        id: data.id_user,
        imageUser: data.image_user,
        login: data.login_date,
        rooms: data.room_id,
        email: data.user_email
      }
      this.setRoomDisplay(setUserDislay)
      const form = {
        iduser: this.Id,
        idRoom: data.room_id
      }
      this.getChat(form)
      this.GetRoomList(this.Id)
      this.setDisplayChat(1)
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

<template>
  <section>
    <div class="d-flex align-items-center title_app mt-lg-4">
      <img
        style="cursor: pointer;"
        @click="backDisplayhome"
        src="../../../assets/images/icons/back.svg"
        alt="imageBack"
      />
    </div>
    <div class="profile text-center mt-lg-3 pt-lg-3">
      <img
        class="img_profile"
        :src="
          Account.image_user
            ? `${this.enviro}${Account.image_user}`
            : require('../../../assets/images/icons/imageDefault.jpg')
        "
        alt="image_profile"
      />
      <h2 class="mt-lg-3">
        {{ Account.fullname ? Account.fullname : Account.username }}
      </h2>
      <p>@{{ Account.username }}</p>
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
    </div>
    <div class="chat_req mt-lg-3">
      <h3>Friend Request</h3>
      <div
        v-for="(item, index) in reqFriend"
        :key="index"
        class="d-flex mb-lg-3 align-items-center"
      >
        <img
          class="image_friendProfile"
          :src="
            item.image_user
              ? `${enviro}${item.image_user}`
              : require('../../../assets/images/icons/imageDefault.jpg')
          "
          alt="image_chatfriend"
        />
        <div class="ml-lg-3 name_tag mt-lg-3">
          <h2>{{ item.username }}</h2>
          <p class="mt-lg-2">
            {{
              item.login_date === '0000-00-00 00:00:00' ? 'Offline' : 'Online'
            }}
          </p>
        </div>
        <div class="ml-auto mr-lg-2">
          <span @click="handleAcceptFriend(item)" class="badge"
            ><b-icon
              icon="person-check-fill"
              font-scale="2"
              aria-hidden="true"
            ></b-icon
          ></span>
        </div>
      </div>
    </div>
    <div class="chat_list mt-lg-3">
      <h3>Friend Contact</h3>
      <div
        v-for="(items, index) in contact"
        :key="index"
        class="d-flex mb-lg-3 align-items-center"
      >
        <img
          class="image_friendProfile"
          :src="`${enviro}${items.image_user}`"
          alt="image_chatfriend"
        />
        <div class="ml-lg-3 name_tag mt-lg-3">
          <h2>{{ items.username }}</h2>
          <p class="mt-lg-2">
            {{
              items.login_date === '0000-00-00 00:00:00' ? 'Offline' : 'Online'
            }}
          </p>
        </div>
        <div class="ml-auto mr-lg-2">
          <span @click="handleRemoveFriend(items.id)" class="badge"
            ><b-icon
              icon="trash2-fill"
              font-scale="2"
              aria-hidden="true"
            ></b-icon
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Alert from '../../../mixins/alert'
export default {
  name: 'sideContact',
  mixins: [Alert],
  data() {
    return {
      enviro: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters({
      Account: 'getUserData',
      Id: 'getId',
      Myemail: 'getEmail',
      contact: 'getContacts',
      reqFriend: 'getReqFriend'
    })
  },
  created() {
    const form = {
      userEmail: this.Myemail
    }
    this.getDataUser(form)
    this.getContact(this.Id)
    this.getFriendRequest(this.Id)
      .then(() => {})
      .catch(err => {
        if (err) {
          this.removeListReq()
        }
      })
  },
  methods: {
    ...mapMutations(['changeDisplay', 'removeListReq']),
    ...mapActions([
      'getContact',
      'getDataUser',
      'removeFriend',
      'getFriendRequest',
      'AcceptFriend'
    ]),
    backDisplayhome() {
      this.changeDisplay(0)
    },
    handleRemoveFriend(event) {
      this.alertDelete().then(res => {
        if (res.value) {
          this.removeFriend(event).then(() => {
            this.$swal({
              title: 'Success Deleted Contact',
              icon: 'success',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              showClass: {
                popup: 'animate__animated animate__fadeIn'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOut'
              }
            }).then(() => {
              this.getContact(this.Id)
            })
          })
        } else {
          this.$swal({
            title: 'Your Contact is still intact',
            icon: 'info',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            showClass: {
              popup: 'animate__animated animate__fadeIn'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOut'
            }
          })
        }
      })
    },
    handleAcceptFriend(event) {
      const setAccept = {
        idRequest: this.Id,
        idResponse: event.user_idRequest
      }
      this.AcceptFriend(setAccept)
        .then(result => {
          if (result) {
            this.removeListReq()
            this.getFriendRequest(this.Id)
            this.getContact(this.Id)
          }
        })
        .catch(err => {
          if (err.data.massage === 'You Dont Have a Friend Request') {
            this.removeListReq()
          }
        })
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

.chat_list,
.chat_req {
  height: 24vh;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.chat_list h3,
.chat_req h3 {
  font-family: 'Rubik', sans-serif;
  font-size: 25px;
  color: #527ef7;
}
.chat_list::-webkit-scrollbar,
.chat_req::-webkit-scrollbar {
  width: 5px;
}
.chat_list::-webkit-scrollbar-track,
.chat_req::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(8, 50, 235, 0.3);
  border-radius: 10px;
}
.chat_list::-webkit-scrollbar-thumb,
.chat_req::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(31, 45, 245, 0.5);
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

.badge {
  cursor: pointer;
  width: 35px;
  font-size: 10px;
  padding-top: 8px;
  padding-left: 4px;
  height: 35px;
  border-radius: 50%;
  background: #7e98df;
  color: white;
}
.badge:hover {
  background: #527ef7;
}
</style>

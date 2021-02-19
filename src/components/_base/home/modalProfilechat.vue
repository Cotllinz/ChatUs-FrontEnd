<template>
  <b-modal
    id="modal_showprofile"
    @show="getData"
    centered
    hide-header
    hide-header-close
    hide-footer
  >
    <header class="profile_page">
      <div class="d-flex">
        <h3 class="mr-auto mt-3 mt-lg-2 ml-auto">@{{ Account.username }}</h3>
      </div>
      <div class="profile text-center mt-2 mt-lg-2">
        <img
          class="profile_pic"
          :src="`${enviro}${Account.image_user}`"
          alt="imageProfile"
        />
        <h2 class="mt-lg-3 mt-3">
          {{ Account.fullname ? Account.fullname : Account.username }}
        </h2>
        <p>@{{ Account.username }}</p>
      </div>
    </header>
    <main>
      <div class="account mt-5 mt-lg-5">
        <h2>Phone number</h2>
        <h5>{{ Account.phone_number }}</h5>
      </div>
      <div class="bio mt-lg-4 mt-4">
        <h3>{{ Account.bio }}</h3>
        <p>Bio</p>
      </div>
      <div class="location">
        <h2>Friend Location</h2>
        <GmapMap
          class="maps"
          :center="coordinate"
          :zoom="7"
          map-type-id="roadmap"
        >
          <GmapMarker
            :position="coordinate"
            icon="https://img.icons8.com/color/48/000000/map-pin.png"
          />
        </GmapMap>
      </div>
    </main>
    <button
      type="button"
      class="mt-3 btn-cancel py-2 py-lg-2 w-100"
      @click="$bvModal.hide('modal_showprofile')"
    >
      Close
    </button>
  </b-modal>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ModalProfileChat',
  data() {
    return {
      enviro: process.env.VUE_APP_URL,
      coordinate: {
        lat: 0,
        lng: 0
      }
    }
  },
  computed: {
    ...mapGetters({ AccountFriend: 'getroomDisplay', Account: 'getUserFriend' })
  },
  methods: {
    ...mapActions(['showFriendProfile']),
    getData() {
      const form = {
        userEmail: this.AccountFriend.email
      }
      this.showFriendProfile(form).then(() => {
        this.coordinate = {
          lat: Number(this.Account.lat),
          lng: Number(this.Account.long)
        }
      })
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
.maps {
  width: 100%;
  height: 300px;
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
.account h2,
.location h2 {
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

.settings h2 {
  font-size: 19px;
  font-weight: 700;
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
</style>

<template>
  <div class="home">
    <b-container class="MobilePosition">
      <b-row>
        <b-col style="padding: 5px" class="mobileRoom_style" cols="4" lg="4">
          <sideProfile
            class="animate__animated animate__fadeIn"
            v-if="menuDisplay === 0"
          />
          <sideSetting v-else-if="menuDisplay === 1" />
          <sideContact
            class="animate__animated animate__zoomInUp"
            v-else-if="menuDisplay === 2"
          />
        </b-col>
        <b-col class="mobileChat_style" cols="8" lg="7">
          <chatRoom v-if="Display === 1" />
          <div v-if="Display === 0" class="roomFree d-flex align-items-center">
            <h1 class="text-center p-lg-5 p-5">
              Please select a chat to start messaging
            </h1>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import sideProfile from '../components/_base/home/sideProfile'
import chatRoom from '../components/_base/home/chatRoom'
import sideSetting from '../components/_base/home/settingSide'
import sideContact from '../components/_base/home/sideContact'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'homePage',
  components: {
    sideProfile,
    chatRoom,
    sideSetting,
    sideContact
  },
  created() {
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
    this.$getLocation()
      .then(coordinates => {
        const setAutoLocation = {
          email: this.Myemail,
          data: {
            lat: coordinates.lat,
            long: coordinates.lng
          }
        }
        if (coordinates.accuracy < 300) {
          this.updateLocation(setAutoLocation).then(() => {
            this.getDataUser(form).then(result => {
              const setData = {
                lat: Number(result.data.data[0].lat),
                lng: Number(result.data.data[0].long)
              }
              this.setCoordinate(setData)
            })
          })
        }
      })
      .catch(err => {
        alert(err)
      })
  },
  computed: {
    ...mapGetters({
      menuDisplay: 'menuDisplay',
      Myemail: 'getEmail',
      Display: 'getDisplaying'
    })
  },
  methods: {
    ...mapMutations(['setCoordinate']),
    ...mapActions(['getDataUser', 'updateLocation'])
  }
}
</script>
<style scoped>
.mobileChat_style {
  padding: 0 !important;
}
.roomFree {
  height: 100vh;
  max-height: 100vh;
  font-family: 'Poppins', sans-serif;
}
.roomFree h1 {
  font-size: 30px;
  font-weight: 700;
  color: #5e81e2;
}

@media (max-width: 576px) {
  .MobilePosition {
    width: 900px;
  }
  .mobileChat_style {
    padding: 10px !important;
  }
}
</style>

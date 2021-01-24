<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col style="padding: 5px" lg="4">
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
        <b-col style="padding: 0" lg="7">
          <chatRoom />
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
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    sideProfile,
    chatRoom,
    sideSetting,
    sideContact
  },
  computed: {
    ...mapGetters({ menuDisplay: 'menuDisplay' })
  }
}
</script>
<style scoped></style>

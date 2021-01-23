<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col style="padding: 5px" lg="4">
          <sideProfile />
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
export default {
  name: 'Home',
  components: {
    sideProfile,
    chatRoom
  }
}
</script>
<style scoped></style>

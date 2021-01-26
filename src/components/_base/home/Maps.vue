<template>
  <div class="maps">
    <GmapMap
      class="mapsStyle"
      :center="Location"
      :zoom="7"
      map-type-id="roadmap"
    >
      <GmapMarker
        :position="Location"
        :clickable="true"
        :draggable="true"
        @click="clickMarker"
        icon="https://img.icons8.com/color/48/000000/map-pin.png"
      />
    </GmapMap>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Maps',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({ Location: 'getLocation', Myemail: 'getEmail' })
  },
  methods: {
    ...mapMutations(['setCoordinate']),
    ...mapActions(['updateLocation', 'getDataUser']),
    clickMarker(position) {
      /* Set Alert */
      const sendLocation = {
        email: this.Myemail,
        data: {
          lat: position.latLng.lat(),
          long: position.latLng.lng()
        }
      }
      this.updateLocation(sendLocation).then(result => {
        if (result) {
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
        }
      })
    }
  }
}
</script>
<style scoped>
.mapsStyle {
  height: 200px;
  width: 90%;
}
</style>

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'animate.css'
import toasted from 'vue-toasted'
import 'sweetalert2/dist/sweetalert2.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeolocation from 'vue-browser-geolocation'
Vue.use(VueGeolocation)
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDymMMjQQ5ktaO7lj5FifsXyy-wDOuY3mA',
    libraries: 'places'
  }
})
Vue.use(toasted, {
  duration: 10000,
  position: 'top-right',
  action: {
    text: 'Close',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

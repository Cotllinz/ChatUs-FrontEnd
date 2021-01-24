import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import menu from './modules/menu'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    menu
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})

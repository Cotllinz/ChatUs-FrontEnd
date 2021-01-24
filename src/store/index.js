import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import menu from './modules/menu'
import home from './modules/home'
import contact from './modules/contact'
import userAcc from './modules/user'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    menu,
    home,
    contact,
    userAcc
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})

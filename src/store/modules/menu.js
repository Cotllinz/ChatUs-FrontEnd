export default {
  state: {
    menu: 1
  },
  mutations: {
    changeDisplay(state, payload) {
      state.menu = payload
    }
  },
  actions: {},
  getters: {
    menuDisplay(state) {
      return state.menu
    }
  }
}

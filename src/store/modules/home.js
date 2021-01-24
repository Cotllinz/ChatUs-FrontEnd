import axios from 'axios'
export default {
  state: {
    roomList: [],
    chat: []
  },
  mutations: {
    setListroom(state, payload) {
      state.roomList = payload.data
    },
    chat(state, payload) {
      state.chat = payload.data
    }
  },
  actions: {
    GetRoomList(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}chat/getRoom/${payload}`)
          .then(result => {
            context.commit('setListroom', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    getChat(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}chat/getChat`, payload)
          .then(result => {
            console.log(result)
            context.commit('chat', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getRoom(state) {
      return state.roomList
    },
    getChat(state) {
      return state.chat
    }
  }
}

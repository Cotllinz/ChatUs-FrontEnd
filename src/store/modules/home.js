import axios from 'axios'
export default {
  state: {
    roomList: [],
    chat: [],
    roomDisplay: []
  },
  mutations: {
    setListroom(state, payload) {
      state.roomList = payload.data
    },
    chat(state, payload) {
      state.chat = payload.data
    },
    setRoomDisplay(state, payload) {
      state.roomDisplay = payload
    },
    setSocketchat(state, payload) {
      state.chat.push(payload)
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
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}chat/getChat`, payload)
          .then(result => {
            context.commit('chat', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    postChat(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}chat/chating`, payload)
          .then(result => {
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
    },
    getroomDisplay(state) {
      return state.roomDisplay
    }
  }
}

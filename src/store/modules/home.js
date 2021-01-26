import axios from 'axios'
export default {
  state: {
    roomList: [],
    chat: [],
    roomDisplay: [],
    coordinate: {
      lat: 0,
      lng: 0
    }
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
    },
    setCoordinate(state, payload) {
      state.coordinate.lat = payload.lat
      state.coordinate.lng = payload.lng
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
    },
    updateLocation(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}user/updateLocation/${payload.email}`,
            payload.data
          )
          .then(result => {
            console.log(result)
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
    },
    getLocation(state) {
      return state.coordinate
    }
  }
}

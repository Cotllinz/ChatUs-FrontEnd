import axios from 'axios'
export default {
  state: {
    contact: [],
    friend: [],
    reqFriend: []
  },
  mutations: {
    setFriend(state, payload) {
      state.contact = payload.data
    },
    setSearchFriend(state, payload) {
      state.friend = payload.data
    },
    errorSearch(state) {
      state.friend = []
    },
    setFriendRequest(state, payload) {
      state.reqFriend = payload.data
    },
    removeListReq(state) {
      state.reqFriend = []
    }
  },
  actions: {
    getContact(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}friend/friendlist/${payload}`)
          .then(result => {
            context.commit('setFriend', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    inviteFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}friend/searchfriend`, payload)
          .then(result => {
            context.commit('setSearchFriend', result.data)
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    },
    addFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}friend/addfriend`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    removeFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}friend/deletefriend/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    getFriendRequest(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}friend/friendrequest/${payload}`)
          .then(result => {
            context.commit('setFriendRequest', result.data)
            resolve(result)
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    },
    AcceptFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}friend/acceptFriend`, payload)
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
    getContacts(state) {
      return state.contact
    },
    getFriend(state) {
      return state.friend
    },
    getReqFriend(state) {
      return state.reqFriend
    }
  }
}

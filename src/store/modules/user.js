import axios from 'axios'
export default {
  state: {
    userAccount: []
  },
  mutations: {
    setUserData(state, payload) {
      state.userAccount = payload.data[0]
    }
  },
  actions: {
    updatePassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}user/updatePass/${payload.Id}`,
            payload.Data
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    updatePhone(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}user/updatePhone/${payload.Id}`,
            payload.form
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    updateUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}user/updateUser/${payload.email}`,
            payload.form
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    getDataUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}user/check`, payload)
          .then(result => {
            context.commit('setUserData', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getUserData(state) {
      return state.userAccount
    }
  }
}

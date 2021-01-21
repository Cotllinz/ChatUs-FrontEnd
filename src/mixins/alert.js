export default {
  methods: {
    AlertSuccesLogin(username) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Signed in successfully',
          text: `Hi! ${username} Welcome at ChatUs `,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertErrorLogin(msg) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Something went wrong!',
          icon: 'error',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          text: `${msg}`
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertErrorRegister(msg) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Something went wrong!',
          icon: 'error',
          showConfirmButton: false,
          timer: 3500,
          showClass: {
            popup: 'animate__animated animate__bounceInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
          },
          timerProgressBar: true,
          text: msg ? `${msg}` : 'Password not match please check again'
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSuccessRegister(msg) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: `${msg}`,
          icon: 'success',
          showConfirmButton: true,
          showClass: {
            popup: 'animate__animated animate__bounceInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
          },
          confirmButtonColor: '#5e81e2',
          text: 'Check your email for activation account'
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertSuccessSend(msg) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: `${msg}`,
          icon: 'success',
          showConfirmButton: false,
          timer: 3500,
          showClass: {
            popup: 'animate__animated animate__bounceInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutDown'
          }
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

import { Toast, Events } from 'quasar'
import api from 'src/api'
import store from 'src/store'

export default {
  methods: {
    createUser (user) {
      return api.service('users').create(user)
    },
    getUser (userId) {
      return api.service('users').get(userId)
    },
    register (user) {
      this.createUser(user)
      .then(_ => {
        return this.login(user.email, user.password)
      })
      .catch(_ => {
        Toast.create.negative('Cannot create the desired user')
      })
    },
    authenticate () {
      api.authenticate()
      .then(response => {
        return api.passport.verifyJWT(response.accessToken)
      })
      .then(payload => {
        return this.getUser(payload.userId)
      })
      .then(user => {
        store.setUser(user)
        Events.$emit('user-signed-in')
      })
      .catch(_ => {
        Events.$emit('user-signed-out')
      })
    },
    login (email, password) {
      api.authenticate({
        strategy: 'local',
        email: email,
        password: password
      })
      .then(response => {
        return api.passport.verifyJWT(response.accessToken)
      })
      .then(payload => {
        return this.getUser(payload.userId)
      })
      .then(user => {
        store.setUser(user)
        Events.$emit('login')
      })
      .catch(_ => {
        Toast.create.negative('Cannot sign in, do you have an account ?')
      })
    },
    logout () {
      api.logout()
      .then(_ => {
        store.setUser(null)
        Events.$emit('logout')
      })
      .catch(_ => {
        Toast.create.negative('Cannot sign out')
      })
    }
  }
}

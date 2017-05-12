import { Events } from 'quasar'
import api from 'src/api'
import store from 'src/store.js'

function restoreUser (accessToken) {
  return api.passport.verifyJWT(accessToken)
  .then(payload => {
    return api.service('users').get(payload.userId)
  })
  .then(user => {
    store.setUser(user)
    Events.$emit('login')
  })
}

export default {
  methods: {
    register (user) {
      return api.service('users').create(user)
      .then(_ => {
        return this.login(user.email, user.password)
      })
    },
    restoreSession () {
      return api.authenticate()
      .then(response => {
        return restoreUser(response.accessToken)
      })
    },
    login (email, password) {
      return api.authenticate({
        strategy: 'local',
        email: email,
        password: password
      })
      .then(response => {
        return restoreUser(response.accessToken)
      })
    },
    logout () {
      return api.logout()
      .then(_ => {
        store.setUser(null)
        Events.$emit('logout')
      })
    }
  }
}

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

export function register (user) {
  delete user.confirmPassword
  delete user.policiesAccepted
  return api.service('users').create(user)
  .then(_ => {
    console.log('login')
    return this.login(user.email, user.password)
  })
}

export function restoreSession () {
  return api.authenticate()
  .then(response => {
    return restoreUser(response.accessToken)
  })
}

export function login (email, password) {
  return api.authenticate({
    strategy: 'local',
    email: email,
    password: password
  })
  .then(response => {
    console.log('login:authenticated')
    return restoreUser(response.accessToken)
  })
}

export function logout () {
  return api.logout()
  .then(_ => {
    store.setUser(null)
    Events.$emit('logout')
  })
}

import { Events } from 'quasar'

export default {
  userStates: {
    user: null
  },
  formStates: {
    target: null
  },
  getUser () {
    return this.userStates.user
  },
  setUser (user) {
    this.userStates.user = user
    Events.$emit('user-changed')
  }
}

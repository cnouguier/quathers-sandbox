import { Events } from 'quasar'

export default {
  userStates: {
    user: null
  },
  getUser () {
    return this.userStates.user
  },
  setUser (user) {
    console.log('setting user in store')
    this.userStates.user = user
    Events.$emit('user-changed')
  }
}

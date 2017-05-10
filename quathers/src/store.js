import { Events } from 'quasar'

export default {

  store: {
    appName: 'Quathers',
    user: null
  },
  getUser () {
    return this.user
  },
  setUser (user) {
    console.log('setting user in store')
    this.user = user
    Events.$emit('user-changed')
  }

}

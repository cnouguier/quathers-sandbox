import { Events } from 'quasar'

export default {
  // Application states
  appStates: {
    conf: null
  },
  getConf () {
    return this.appStates.conf
  },
  setConf (conf) {
    this.appStates.conf = conf
    Events.$emit('conf-changed')
  },
  getConfValue (key, defaultValue) {
    if (this.appStates.conf) {
      var path = key.split('.')
      var leaf = this.appStates.conf
      for (var i = 0; i < path.length; i++) {
        if (leaf[path[i]]) {
          leaf = leaf[path[i]]
        }
        else {
          return defaultValue
        }
      }
      return leaf
    }
    return defaultValue
  },
  // User states
  userStates: {
    user: null
  },
  getUser () {
    return this.userStates.user
  },
  setUser (user) {
    this.userStates.user = user
    Events.$emit('user-changed')
  }
}

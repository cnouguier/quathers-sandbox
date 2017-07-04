<template>
  <div>
    <div v-if="authenticated">
      <k-layout />
    </div>
    <div v-else>
      <router-view class="layout-view"></router-view>
    </div>
  </div>
</template>

<script>
import { Toast, Events } from 'quasar'
import KLayout from 'src/components/layout/KLayout'
import { restoreSession } from 'src/authentication'
import store from 'src/store'

export default {
  components: {
    KLayout
  },
  data () {
    return {
      userStates: store.userStates
    }
  },
  computed: {
    authenticated () {
      return this.userStates.user !== null
    }
  },
  mounted () {
    restoreSession()
    .then(user => {
      Toast.create.positive('Restoring previous session')
    })
    .catch(_ => {
      this.$router.push({name: 'login'})
    })
    Events.$on('login', () => {
      this.$router.push({name: 'home'})
    })
  }
}
</script>

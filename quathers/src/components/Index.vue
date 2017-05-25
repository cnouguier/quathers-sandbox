<template>
  <div>
    <div v-if="authenticated">
      <layout></layout>
    </div>
    <div v-else>
      <router-view class="layout-view"></router-view>
    </div>
  </div>
</template>

<script>
import { Toast, Events } from 'quasar'
import Layout from 'src/components/layout/Layout'
import { restoreSession } from 'src/authentication'
import store from 'src/store'

export default {
  components: {
    Layout
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
    Events.$on('logout', () => {
      this.$router.push({name: 'login'})
    })
  }
}
</script>

<style>
</style>

<template>
  <q-layout>
    <app-bar ref="appbar" slot="header" ></app-bar>
    <drawer ref="drawer"></drawer>
    <!-- sub-routes -->
    <router-view class="layout-view"></router-view>
  </q-layout>
</template>

<script>
import { Toast, Events } from 'quasar'
import AppBar from 'src/components/AppBar'
import Drawer from 'src/components/Drawer'
import AuthenticationMixin from 'src/mixins/authentication'

export default {
  data () {
    return {
    }
  },
  mixins: [ AuthenticationMixin ],
  components: {
    'app-bar': AppBar,
    'drawer': Drawer
  },
  mounted () {
    this.restoreSession()
    .then(user => {
      Toast.create.positive('Restoring previous session')
    })
    .catch(_ => {
      Toast.create.negative('Cannot restore previous session')
      this.$router.push('welcome')
    })
    Events.$on('login', () => {
      this.$router.push('home')
    })
    Events.$on('logout', () => {
      this.$router.push('welcome')
    })
  }
}
</script>

<style>
</style>

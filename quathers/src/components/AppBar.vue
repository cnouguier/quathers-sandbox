<template>
  <div class="toolbar">

    <button @click="$refs.menu.open()" v-show="authenticated">
      <i>menu</i>
      <q-tooltip anchor="bottom middle" self="top middle" :offset="[0, 20]">Menu</q-tooltip>
    </button>

    <q-toolbar-title :padding="0">
      {{$root.store.appName}}
    </q-toolbar-title>

    <button class="primary" @click="$router.push('login')" v-show="!authenticated">
      Log In
    </button>
    <button class="primary" @click="$router.push('register')" v-show="!authenticated">
      Register
    </button>

    <q-fab icon="perm_identity" direction="left" v-show="authenticated">
      <q-small-fab class="primary" @click.native="logout" icon="exit_to_app">
        <q-tooltip anchor="bottom middle" self="top middle" :offset="[0, 20]">Sign Out</q-tooltip>
      </q-small-fab>
    </q-fab>
  </div>
</template>

<script>
import { Events } from 'quasar'
import AuthenticationMixin from 'src/mixins/authentication'

export default {
  data () {
    return {
      authenticated: false
    }
  },
  mixins: [
    AuthenticationMixin
  ],
  mounted () {
    Events.$on('login', () => {
      this.authenticated = true
    })
    Events.$on('logout', () => {
      this.authenticated = false
    })
  }
}
</script>

<style>
</style>

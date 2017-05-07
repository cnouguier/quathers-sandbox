<template>
  <q-layout>
    <div slot="header" class="toolbar">

      <button @click="$refs.menu.open()" v-show="authenticated">
        <i>menu</i>
        <q-tooltip anchor="bottom middle" self="top middle" :offset="[0, 20]">Menu</q-tooltip>
      </button>

      <q-toolbar-title :padding="0">
        Quathers
      </q-toolbar-title>

      <button class="primary" @click="goTo('signin')" v-show="!authenticated">
        Sign In
      </button>
      <button class="primary" @click="goTo('signup')" v-show="!authenticated">
        Sign Up
      </button>

      <q-fab icon="perm_identity" direction="left" v-show="authenticated">
        <q-small-fab class="primary" @click.native="logout" icon="exit_to_app">
          <q-tooltip anchor="bottom middle" self="top middle" :offset="[0, 20]">Sign Out</q-tooltip>
        </q-small-fab>
      </q-fab>
    </div>

    <q-drawer swipe-only left-side ref="menu" v-show="authenticated">
      <div class="toolbar light">
        <i>menu</i>
        <q-toolbar-title :padding="1">
            Menu
        </q-toolbar-title>
      </div>

      <q-drawer-link icon="home" to="/chat">Home</q-drawer-link>
      <q-drawer-link icon="chat" to="/chat">Chat</q-drawer-link>

      <q-collapsible icon="info" label="About">
        <p style="padding: 25px;" class="text-grey-7">
          This is a template project combining the power of Quasar and Feathers to create real-time web apps.
        </p>
      </q-collapsible>
    </q-drawer>

    <!-- sub-routes -->
    <router-view class="layout-view" :user="user"></router-view>

    <!--q-drawer swipe-only right-side ref="profile">
      <q-drawer-link icon="exit_to_app" to="/">Log out</q-drawer-link>
    </q-drawer-->

  </q-layout>
</template>

<script>
import { Toast } from 'quasar'
import api from 'src/api'

export default {
  data () {
    return {
      user: null
    }
  },
  computed: {
    authenticated () {
      return this.$data.user !== null
    }
  },
  methods: {
    goTo (route) {
      this.$router.push({ name: route })
    },
    getUser (accessToken) {
      return api.passport.verifyJWT(accessToken)
      .then(payload => {
        return api.service('users').get(payload.userId)
      })
      .then(user => {
        this.$data.user = user
        return user
      })
    }
  },
  mounted () {
    // Check whether a session is already running
    api.authenticate()
    .then((response) => {
      return this.getUser(response.accessToken)
    })
    .then(user => {
      Toast.create.positive('Restoring previous session')
    })
    .catch(_ => {
      this.goTo('welcome')
    })
    // On successfull sign in
    api.on('authenticated', response => {
      this.getUser(response.accessToken)
      .then(user => {
        this.goTo('home')
      })
    })
    // On sign out
    api.on('logout', () => {
      this.goTo('welcome')
    })
  }
}
</script>

<style>
</style>

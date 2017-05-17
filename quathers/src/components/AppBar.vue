<template>
  <div class="toolbar">

    <button @click="$emit('menu-opened')" v-show="authenticated">
      <i>menu</i>
    </button>

    <q-toolbar-title :padding="0">
      Quathers
    </q-toolbar-title>

    <button class="primary" @click="$router.push('login')" v-show="!authenticated">
      Log In
    </button>
    <button class="primary" @click="$router.push('register')" v-show="!authenticated">
      Register
    </button>

    <span class="chip label bg-white text-primary" v-show="authenticated">
      <img :src="avatar">
      {{name}}
      <q-popover ref="popover" anchor="bottom right" self="top right">
        <div class="list">
          <div class="item item-link" @click="$refs.popover.close()">
            <i class="item-primary">perm_identity</i>
            <div class="item-content">My Profile</div>
          </div>
          <div class="item item-link" @click="$refs.popover.close(), logout()">
            <i class="item-primary">exit_to_app</i>
            <div class="item-content">Logout</div>
          </div>
        </div>
      </q-popover>
    </span>

  </div>
</template>

<script>
import authentication from 'src/mixins/authentication'
import store from 'src/store'

export default {
  name: 'app-bar',
  data () {
    return {
      userStates: store.userStates
    }
  },
  computed: {
    authenticated () {
      return this.$data.userStates.user !== null
    },
    avatar () {
      if (this.authenticated) {
        return this.$data.userStates.user.avatar
      }
      return ''
    },
    name () {
      // TODO: use the firstname instead
      if (this.authenticated) {
        return this.$data.userStates.user.email
      }
      return ''
    }
  },
  mixins: [
    authentication
  ]
}
</script>

<style>
</style>

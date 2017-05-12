<template>
  <div class="toolbar">

    <button @click="$refs.menu.open()" v-show="authenticated">
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

    <button ref="target" class="clear" v-show="authenticated">
      <i>face</i>
      <q-popover ref="popover">
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
    </button>
  </div>
</template>

<script>
import authentication from 'src/mixins/authentication'
import store from 'src/store'

export default {
  data () {
    return {
      userStates: store.userStates
    }
  },
  computed: {
    authenticated () {
      return this.$data.userStates.user !== null
    }
  },
  mixins: [
    authentication
  ]
}
</script>

<style>
</style>

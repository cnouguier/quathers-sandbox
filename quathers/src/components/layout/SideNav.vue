<template>
  <q-drawer ref="drawer">
    <!--
      User's identity and related actions
    --> 
    <div class="column justify-center bg-dark text-light" style="padding:18px">
      <div class="self-center">
        <img :src="user.avatar" style="border-radius:50%" width="96px" height="96px">
      </div>
      <div>
        <div class="row justify-between items-center">
          <div>
            <h6>{{user.firstName}} {{user.lastName}}</h6>
          </div>
          <div>
            <button class="circular clear" v-on:click="profile">
              <i>perm_identity</i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--
      Primary navigation links
    --> 
    <q-drawer-link icon="event_note" to="/events">Events</q-drawer-link>
    <!--   
      Secondary navigation links
    --> 
    <div class="list">
      <q-drawer-link icon="person" to="/users">Users</q-drawer-link>
      <q-drawer-link icon="school" to="/skill">Skills</q-drawer-link>
      <q-drawer-link icon="group" to="/groups">Groups</q-drawer-link>
      <q-drawer-link icon="domain" to="/organizations">Organizations</q-drawer-link>
    </div>
    <!--   
      Application related actions
    --> 
    <div class="list">
      <div class="item item-link" @click="help">
        <i class="item-primary">help</i>
        <div class="item-content">Help</div>
      </div>
      <div class="item item-link" @click="exit">
        <i class="item-primary">exit_to_app</i>
        <div class="item-content">Logout</div>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import store from 'src/store'
import { logout } from 'src/authentication'

export default {
  name: 'side-nav',
  data () {
    return {}
  },
  computed: {
    user () {
      return store.userStates.user
    }
  },
  methods: {
    open () {
      this.$refs.drawer.open()
    },
    help () {
      // todo
    },
    profile () {

    },
    exit () {
      logout()
    }
  }
}
</script>

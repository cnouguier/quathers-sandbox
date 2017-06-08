<template>
  <q-drawer ref="drawer">
    <!--
      User's identity and related actions
    --> 
    <identity />
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
import config from 'src/configuration.js'
import { loadComponent } from 'src/utils.js'
import { logout } from 'src/authentication'

export default {
  name: 'side-nav',
  components: {
    'identity': loadComponent(config.sideNav.identity ? config.sideNav.identity : 'Identity')
  },
  data () {
    return {}
  },
  methods: {
    open () {
      this.$refs.drawer.open()
    },
    help () {
      // todo
    },
    exit () {
      logout()
    }
  },
  mounted () {
    this.$emit('sideNavReady')
  }
}
</script>

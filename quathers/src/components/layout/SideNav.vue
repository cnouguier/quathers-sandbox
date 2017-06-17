<template>
  <q-drawer ref="drawer">
    <!--
      User's identity and related actions
    --> 
    <identity />
    <!--
      Links
    -->
    <div v-for="link in links">
      <div v-if="link.label">
        <q-drawer-link :icon="link.icon" :to="{name: link.route}">{{ link.label }}</q-drawer-link>
      </div>
      <div v-else>
        <hr>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import config from 'src/configuration.js'
import { loadComponent } from 'src/utils.js'

export default {
  name: 'side-nav',
  components: {
    'identity': loadComponent(config.sideNav.identity ? config.sideNav.identity : 'layout/Identity')
  },
  data () {
    return {
      links: []
    }
  },
  methods: {
    open () {
      this.$refs.drawer.open()
    }
  },
  mounted () {
    if (config.sideNav.links) {
      this.links = config.sideNav.links
    }
    this.$emit('sideNavReady')
  }
}
</script>

<template>
  <q-layout>
    <!--
      The AppBar
    -->
    <app-bar ref="app_bar" @appBarReady="onAppBarReady" slot="header"></app-bar>
    <!--
      The SideNav
    -->
    <side-nav ref="side_nav" @sideNavReady="onSideNavReady"></side-nav>
    <!--
      The Content area
    -->
    <router-view class="layout-view"></router-view>
  </q-layout>
</template>

<script>
import config from 'src/configuration.js'
import { loadComponent } from 'src/utils.js'

export default {
  name: 'layout',
  components: {
    'app-bar': loadComponent(config.layout.appBar ? config.layout.appBar : 'layout/AppBar'),
    'side-nav': loadComponent(config.layout.sideNav ? config.layout.sideNav : 'layout/SideNav')
  },
  data () {
    return {}
  },
  methods: {
    connectAppBarNavMenuToSideNav () {
      this.$refs.app_bar.$on('navMenuClicked', () => {
        this.$refs.side_nav.open()
      })
    },
    onAppBarReady () {
      this.appBarReady = true
      if (this.sideNavReeady) {
        this.connectAppBarNavMenuToSideNav()
      }
    },
    onSideNavReady () {
      this.sideNavReady = true
      if (this.appBarReady) {
        this.connectAppBarNavMenuToSideNav()
      }
    }
  },
  beforeCreate () {
    // initialize vprivate stuff
    this.appBarReady = false
    this.sideNavReady = false
  },
  mounted () {
    this.$emit('layoutReady')
  }
}
</script>

<template>
  <!--
    Setups the  main layout of the application following the guidelines
    exposed here: https://material.io/guidelines/layout/structure.html#
    The layout is composed of  3 main components:
   -->
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
    'app-bar': loadComponent(config.layout ? config.layout.appBar : 'AppBar'),
    'side-nav': loadComponent(config.layout ? config.layout.sideNav : 'SideNav')
  },
  data () {
    return {}
  },
  methods: {
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
    },
    connectAppBarNavMenuToSideNav () {
      this.$refs.app_bar.$on('navMenuClicked', () => {
        this.$refs.side_nav.open()
      })
    }
  },
  beforeCreate () {
    // initialize vprivate stuff
    this.appBarReady = false
    this.sideNavReady = false
  }
}
</script>

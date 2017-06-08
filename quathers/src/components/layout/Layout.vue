<template>
  <!--
    Setups the  main layout of the application following the guidelines
    exposed here: https://material.io/guidelines/layout/structure.html#
    The layout is composed of  3 main components:
    - The App bar
    - the Side nav
    - the Content area
   -->
  <q-layout>
    <app-bar ref="appBar" slot="header"></app-bar>
    <side-nav ref="sideNav"></side-nav>
    <router-view ref="contentArea" class="layout-view"></router-view>
  </q-layout>
</template>

<script>
import AppBar from 'src/components/layout/AppBar'
import SideNav from 'src/components/layout/SideNav'

export default {
  name: 'layout',
  components: {
    AppBar,
    SideNav
  },
  data () {
    return {}
  },
  mounted () {
    // Handle the event emitted by the nav icon (see the App bar)
    // Note: Once the Side nav is opened, the Nav icon is hidden
    this.$refs.appBar.$on('side-nav-menu-clicked', () => {
      this.$refs.sideNav.open()
    })
  }
}
</script>

<template>
  <q-layout ref="layout" view="hHr LpR lFf">
    <!--
      The AppBar
    -->
    <app-bar slot="header" ref="app_bar" @menuClicked="$refs.layout.toggleLeft()" />
    <!--
      The SideNav
    -->
    <side-nav slot="left" ref="side_nav" />
    <!--
      The Content area
    -->
    <router-view />
  </q-layout>
</template>

<script>
import { QLayout } from 'quasar'
import { loadComponent } from 'src/utils.js'
import config from 'src/configuration.js'

export default {
  name: 'layout',
  components: {
    QLayout,
    'app-bar': loadComponent(config.layout.appBar ? config.layout.appBar : 'layout/AppBar'),
    'side-nav': loadComponent(config.layout.sideNav ? config.layout.sideNav : 'layout/SideNav')
  },
  data () {
    return {}
  },
  mounted () {
    this.$emit('layoutReady')
  }
}
</script>

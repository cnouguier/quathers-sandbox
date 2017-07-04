<template>
  <q-layout ref="layout" view="hHr LpR lFf">
    <!--
      The AppBar
    -->
    <k-app-bar slot="header" ref="app_bar" @menuClicked="$refs.layout.toggleLeft()" />
    <!--
      The SideNav
    -->
    <k-side-nav slot="left" ref="side_nav" />
    <!--
      The Content area
    -->
    <router-view />
  </q-layout>
</template>

<script>
import { QLayout } from 'quasar'
import { loadComponent } from 'src/utils.js'
import store from 'src/store.js'

export default {
  name: 'layout',
  components: {
    QLayout,
    'k-app-bar': loadComponent(store.getConfValue('layout.appBar', 'layout/KAppBar')),
    'k-side-nav': loadComponent(store.getConfValue('layout.sideNav', 'layout/KSideNav'))
  },
  data () {
    return {}
  },
  mounted () {
    this.$emit('layoutReady')
  }
}
</script>

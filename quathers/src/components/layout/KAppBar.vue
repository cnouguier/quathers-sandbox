<template>
  <q-toolbar>
    <q-btn flat icon="menu" @click="$emit('menuClicked')" />
    <q-toolbar-title>
      Quathers
      <span slot="subtitle">Powered by Kaelia</span>
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
import { QToolbar, QToolbarTitle, QBtn } from 'quasar'

export default {
  name: 'app-bar',
  components: {
    QToolbar,
    QToolbarTitle,
    QBtn
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('appBarReady')
  }
}
</script>

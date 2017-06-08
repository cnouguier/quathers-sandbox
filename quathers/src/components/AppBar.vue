<template>
  <div class="toolbar">
    <button class="hide-on-drawer-visible" @click="$emit('navMenuClicked')">
      <i>menu</i>
    </button>

    <q-toolbar-title :padding="0">
      Quathers
    </q-toolbar-title>
  </div>
</template>

<script>
export default {
  name: 'app-bar',
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('appBarReady')
  }
}
</script>

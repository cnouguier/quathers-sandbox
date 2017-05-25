<template>
  <div class="toolbar">
    <button class="hide-on-drawer-visible" @click="$emit('side-nav-menu-clicked')">
      <i>menu</i>
    </button>

    <q-toolbar-title :padding="0">
      Quathers
    </q-toolbar-title>
  </div>
</template>

<script>
import store from 'src/store'

export default {
  name: 'app-bar',
  data () {
    return {
      userStates: store.userStates
    }
  },
  computed: {
    avatar () {
      return this.$data.userStates.user.avatar
    },
    name () {
      return this.$data.userStates.user.email
    }
  }
}
</script>

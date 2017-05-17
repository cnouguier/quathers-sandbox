<template>
<!-- root node required -->
<q-drawer swipe-only ref="drawer">
  <div class="list">
    <div class="item item-link" @click="$refs.popover.close()">
      <i class="item-primary">perm_identity</i>
      <div class="item-content">My Profile</div>
    </div>
    <div class="item item-link" @click="$refs.popover.close(), logout()">
      <i class="item-primary">exit_to_app</i>
      <div class="item-content">Logout</div>
    </div>
  </div>
</q-drawer>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    open () {
      this.$refs.drawer.open()
    }
  },
  mounted () {
    this.$refs.drawer.close()
  }
}
</script>

<style>
</style>

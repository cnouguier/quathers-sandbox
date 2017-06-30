<template>
  <div class="layout-padding">
    <h3>Thanks for using Quathers</h3>
  </div>
</template>

<script>
import { logout } from 'src/authentication'

export default {
  name: 'logout',
  data () {
    return {
    }
  },
  mounted () {
    logout()
  }
}
</script>

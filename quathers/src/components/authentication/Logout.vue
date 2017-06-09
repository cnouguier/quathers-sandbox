<template>
  <div>
  </div>
</template>

<script>
import { logout } from 'src/authentication'

export default {
  name: 'logout',
  components: {
    Screen
  },
  data () {
    return {
    }
  },
  mounted () {
    logout()
  }
}
</script>

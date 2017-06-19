<template>
  <div>
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

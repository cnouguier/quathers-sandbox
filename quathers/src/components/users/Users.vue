<template>
  <collection :service="'users'"></collection>
</template>

<script>
import Collection from 'src/components/collection/Collection'

export default {
  name: 'users',
  components: {
    Collection
  },
  data () {
    return {
    }
  }
}
</script>

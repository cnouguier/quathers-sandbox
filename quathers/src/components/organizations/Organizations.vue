<template>
  <collection :service="'organizations'"></collection>
</template>

<script>
import Collection from 'src/components/collection/Collection'

export default {
  name: 'organizations',
  components: {
    Collection
  },
  data () {
    return {
    }
  }
}
</script>

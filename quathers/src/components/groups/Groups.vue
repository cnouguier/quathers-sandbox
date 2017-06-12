<template>
  <collection :service="'groups'"></collection>
</template>

<script>
import Collection from 'src/components/collection/Collection'

export default {
  name: 'groups',
  components: {
    Collection
  },
  data () {
    return {
    }
  }
}
</script>

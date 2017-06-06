<template>
  <collection 
    ref="collection" 
    :service="'groups'"
    :page-size="5">
  </collection>
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

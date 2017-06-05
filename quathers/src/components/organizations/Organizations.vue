<template>
  <collection 
    ref="collection" 
    :service="'organizations'"
    :page-size="5">
  </collection>
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

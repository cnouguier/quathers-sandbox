<template>
  <collection 
    ref="collection" 
    :service="'users'" 
    :renderer="'user-item'"
    :page-size="5">
  </collection>
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

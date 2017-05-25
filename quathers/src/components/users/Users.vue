<template>
  <collection ref="collection" :service="'users'">
    <template slot="item-content" scope="props">
      <div>
        {{ props.item.email }}
      </div>
    </template>
  </collection>
</template>

<script>
import Collection from 'src/components/Collection'

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

<template>
  <collection 
  :service="'users'"
  :itemActions="itemActions"
  :floatingActions="floatingActions"
  @triggered="onActionTriggered" />
</template>

<script>
import Collection from 'src/components/collection/Collection'
import { mixinStore } from 'src/mixins'
import config from 'src/configuration.js'

export default {
  name: 'users',
  components: {
    Collection
  },
  data () {
    return {
      itemActions: [],
      floatingActions: []
    }
  },
  methods: {
    onActionTriggered (action) {
      let handler = this[action]
      if (handler !== null) {
        handler()
      }
    }
  },
  mixins: config['users'].mixins.map(mixinName => mixinStore.get(mixinName))
}
</script>

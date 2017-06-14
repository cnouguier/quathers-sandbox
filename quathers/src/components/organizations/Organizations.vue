<template>
  <collection 
  :service="'organizations'" 
  :floatingActions="floatingActions" 
  :itemActions="itemActions"
  @actionTriggered="onActionTriggered" />
</template>

<script>
import Collection from 'src/components/collection/Collection'
import { mixinStore } from 'src/mixins'
import config from 'src/configuration.js'

export default {
  name: 'organizations',
  components: {
    Collection
  },
  data () {
    return {
      floatingActions: [],
      itemActions: []
    }
  },
  methods: {
    onActionTriggered (action, item) {
      let handler = this[action]
      if (handler !== null) {
        if (item !== null) {
          handler(item)
        }
        else {
          handler()
        }
      }
    }
  },
  mixins: config['organizations'].mixins.map(mixinName => mixinStore.get(mixinName))
}
</script>

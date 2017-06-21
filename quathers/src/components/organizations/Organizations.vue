<template>
  <collection 
  :service="'organizations'" 
  :actions="actions" 
  :options="options"
  @actionTriggered="onActionTriggered" />
</template>

<script>
import { mixinStore } from 'src/mixins'
import config from 'src/configuration.js'

export default {
  name: 'organizations',
  data () {
    return {
      options: {
        delimiter: true
      }
    }
  },
  mixins: config['organizations'].mixins.map(mixinName => mixinStore.get(mixinName))
}
</script>

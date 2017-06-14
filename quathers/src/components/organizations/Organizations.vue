<template>
  <collection 
  :service="'organizations'" 
  :floatingActions="floatingActions" 
  :itemActions="itemActions"
  @actionTriggered="onActionTriggered" />
</template>

<script>
import { mixinStore } from 'src/mixins'
import config from 'src/configuration.js'

export default {
  name: 'organizations',
  mixins: config['organizations'].mixins.map(mixinName => mixinStore.get(mixinName))
}
</script>

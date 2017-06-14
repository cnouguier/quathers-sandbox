<template>
  <collection 
  :service="'groups'" 
  :floatingActions="floatingActions" 
  :itemActions="itemActions"
  @actionTriggered="onActionTriggered" />
</template>

<script>
import { mixinStore } from 'src/mixins'
import config from 'src/configuration.js'

export default {
  name: 'groups',
  mixins: config['groups'].mixins.map(mixinName => mixinStore.get(mixinName))
}
</script>

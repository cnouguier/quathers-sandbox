<template>
  <collection 
  :service="'users'"
  :actions="actions" 
  @actionTriggered="onActionTriggered" />
</template>

<script>
import { mixinStore } from 'src/mixins'
import config from 'src/configuration.js'

export default {
  name: 'users',
  mixins: config['users'].mixins.map(mixinName => mixinStore.get(mixinName))
}
</script>

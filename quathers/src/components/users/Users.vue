<template>
  <collection 
  :service="'users'"
  :itemActions="itemActions"
  :floatingActions="floatingActions"
  @triggered="onActionTriggered" />
</template>

<script>
import { mixinStore } from 'src/mixins'
import config from 'src/configuration.js'

export default {
  name: 'users',
  mixins: config['users'].mixins.map(mixinName => mixinStore.get(mixinName))
}
</script>

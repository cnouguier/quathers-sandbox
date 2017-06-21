<template>
  <div>
    <list-item :item="item" :actions="actions" @actionTrigerred="onActionTriggered">
      <img slot="icon" class="item-primary" :src="item.avatar">
      <div slot="primary-text">{{ item.firstName }} {{ item.lastName }}</div>
      <div slot="secondary-text">{{ item.email }}</div>
    </list-item>
  </div>
</template>

<script>
import ListItem from 'src/components/collection/ListItem'
import itemBaseMixin from 'src/mixins/collection/mixin.item-base'

export default {
  name: 'user-list-item',
  components: {
    ListItem
  },
  data () {
    return {}
  },
  mixins: [ itemBaseMixin ]
}
</script>

<template>
  <div>
    <card-item :item="item" :actions="actions" @actionTrigerred="onActionTriggered">
      <img slot="icon" style="width: 32px; border-radius:  50%" :src="item.avatar">
      <span slot="title" style="padding: 18px">{{ item.firstName }} {{ item.lastName }}</span>
      <div slot="content">{{ item.email }}</div>
    </card-item>
  </div>
</template>

<script>
import CardItem from 'src/components/collection/CardItem'
import itemBaseMixin from 'src/mixins/collection/mixin.item-base'

export default {
  name: 'user-card-item',
  components: {
    CardItem
  },
  mixins: [ itemBaseMixin ]
}
</script>

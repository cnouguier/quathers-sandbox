<template>
  <div>
    <card-item :item="item" :actions="actions" @actionTrigerred="onActionTriggered">
      <q-item slot="title">
        <q-item-side :avatar="item.avatar" />
        <q-item-main :label="item.firstName + ' ' + item.lastName" :sublabel="item.email" />
      </q-item>
      <div slot="content"></div>
    </card-item>
  </div>
</template>

<script>
import { QItem, QItemSide, QItemMain } from 'quasar'
import CardItem from 'src/components/collection/CardItem'
import itemBaseMixin from 'src/mixins/collection/mixin.item-base'

export default {
  name: 'user-card-item',
  components: {
    QItem,
    QItemSide,
    QItemMain,
    CardItem
  },
  data () {
    return {}
  },
  mixins: [ itemBaseMixin ]
}
</script>

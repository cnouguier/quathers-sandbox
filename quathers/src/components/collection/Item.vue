<template>
  <div class="item two-lines">
    <div class="item-content has-secondary">
      <div>{{ item.name }}</div>
      <div>{{ item.description }}</div>
    </div>
    <i v-if="actions.length > 0" class="item-secondary">  
    more_vert
      <q-popover>
        <div class="list">
          <div v-for="action in actions" class="item item-link" @click="$emit('actionTrigerred', action.handler, item)">
            <div class="item-content">{{ action.label }}</div>
          </div>
        </div>
      </q-popover>
    </i>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item: {
      type: Object,
      required: true
    },
    actions: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

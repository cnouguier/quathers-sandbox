<template>
  
  <div class="item two-lines">
    <!--
      Icon section
    -->
    <slot name="icon">
    </slot>
    <!--
      Text section
    -->
    <div class="item-content has-secondary">
      <slot name="primary-text">
        <div>{{ item.name }}</div>
      </slot>
      <slot name="secondary-text">
        <div>{{ item.description }}</div>
      </slot>
    </div>
    <!--
      Actions section
    -->
    <slot name="actions">
      <i slot="actions" v-if="actions.length > 1" class="item-secondary">  
        more_vert
        <q-popover>
          <div class="list">
            <div v-for="action in actions" class="item item-link" @click="$emit('actionTrigerred', action.handler, item)">
              <div class="item-content">{{ action.label }}</div>
            </div>
          </div>
        </q-popover>
      </i>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'list-item',
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

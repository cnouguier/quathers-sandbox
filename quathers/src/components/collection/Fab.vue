<template>
  <div>
     <!-- 
      Render an expandable fab if multiple actions are provided
     -->
    <q-fab v-if="actions.length > 1"
      class="absolute-bottom-right primary"
      style="right: 24px; bottom: 24px"
      icon="keyboard_arrow_up"
      direction="up">
        <q-small-fab v-for="action in actions" :key="action.id"
          class="white"
          @click.native="$emit('actionTrigerred', action.handler)"
          :icon="fab.icon">
        </q-small-fab>
    </q-fab>
    <!-- 
      Render a non expandable fab if a single action is provided
     -->
    <button v-else-if="actions.length === 1"
      class="absolute-bottom-right primary circular"
      style="right: 24px; bottom: 24px"
      @click="$emit('actionTrigerred', actions[0].handler)">
      <i>{{ actions[0].icon }}</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'fab',
  props: {
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

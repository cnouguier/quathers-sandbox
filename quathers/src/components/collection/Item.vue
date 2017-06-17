<template>
  <div class="item two-lines">
    <div class="item-content has-secondary">
      <div>{{ firstLine }}</div>
      <div>{{ secondLine }}</div>
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
    formatter: {
      type: Object,
      default: function () {
        return {
          firstLine: ['name'],
          secondLine: ['description']
        }
      }
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
  },
  computed: {
    firstLine () {
      return this.text(this.formatter.firstLine)
    },
    secondLine () {
      return this.text(this.formatter.secondLine)
    }
  },
  methods: {
    text (properties) {
      var result = ''
      for (var i = 0; i < properties.length; i++) {
        result += this.item[properties[i]] + ' '
      }
      return result
    }
  }
}
</script>

<template>
  <div class="column justify-center gutter">
    <div>
      <q-search ref="search" v-model="search" style="padding: 18px"></q-search>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filter',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      search: ''
    }
  },
  mounted () {
    this.$refs.search.$on('input', () => {
      // Never mutate the prop directly
      // See: https://github.com/vuejs/vue/issues/4373
      var clone = Object.assign({}, this.value)
      clone.name = this.search
      this.$emit('input', clone)
    })
  }
}
</script>

<template>
  <h1>
    {{ target }}
  </h1>
</template>

<script>
import store from 'src/store.js'

export default {
  props: [ 'objid' ],
  data () {
    return {
    }
  },
  computed: {
    target () {
      return store.editorStates.target
    }
  }
}
</script>

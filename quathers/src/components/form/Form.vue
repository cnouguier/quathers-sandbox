<template>
  <div>
  <!--component :is="$route.prarams.formType"></component-->
   {{ target.firstName }}
  </div>
</template>

<script>
import store from 'src/store.js'

export default {
  props: [ 'objectId' ],
  data () {
    return {
    }
  },
  computed: {
    target () {
      return store.formStates.target
    }
  }
}
</script>

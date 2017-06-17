<template>
  <div>
  <!--component :is="$route.prarams.formType"></component-->
   {{ target.name }}
  </div>
</template>

<script>
import store from 'src/store.js'

export default {
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

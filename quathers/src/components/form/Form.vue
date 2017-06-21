<template>
  <div>
  <!--component :is="$route.prarams.formType"></component-->
   <h1>Form</h1>
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

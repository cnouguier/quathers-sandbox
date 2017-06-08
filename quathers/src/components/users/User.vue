<template>
  <q-tabs :refs="tab" default-tab="user-form">
    <q-tab name="user-form">
      {{ group.name }}
    </q-tab>
    <q-tab name="user-skills">
      Skills
    </q-tab>
  </q-tabs>
</template>

<script>
export default {
  name: 'user-tabs',
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<template>
  <div>
    <q-tabs :refs="tab" default-tab="group-form">
      <q-tab name="group-form">
        {{ group.name }}
      </q-tab>
      <q-tab name="group-members">
        Members
      </q-tab>
    </q-tabs>
    <router-view ref="tabArea" class="layout-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'group-tabs',
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

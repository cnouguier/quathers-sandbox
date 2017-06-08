<template>
  <div>
    <q-tabs :refs="tab" default-tab="organization-form">
      <q-tab name="organization-form">
        {{ organization.name }}
      </q-tab>
      <q-tab name="organization-members">
        Groups
      </q-tab>
    </q-tabs>
    <router-view ref="tabArea" class="layout-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'organization-tabs',
  props: {
    organization: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

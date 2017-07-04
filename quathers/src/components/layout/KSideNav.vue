<template>
  <div>
    <!--
      User's identity
    --> 
    <k-identity />
    <!--
      Links area
    -->
    <q-list highlight>
      <template v-for="link in links">
        <!-- link -->
        <q-side-link v-if="link.label" 
          item
          :to="{name: link.route}"
          replace
          >
            <q-item-side :icon="link.icon" />
            <q-item-main :label="link.label" />
        </q-side-link>
        <!-- separator -->
        <q-item-separator v-else />
      </template>
    </q-list>
  </div>
</template>

<script>
import { QList, QItem, QItemSide, QItemMain, QSideLink, QItemSeparator } from 'quasar'
import { loadComponent } from 'src/utils.js'
import store from 'src/store.js'

export default {
  name: 'side-nav',
  components: {
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink,
    QItemSeparator,
    'k-identity': loadComponent(store.getConfValue('sideNav.identity', 'layout/KIdentity'))
  },
  data () {
    return {
    }
  },
  computed: {
    links () {
      return store.getConfValue('sideNav.links', [])
    }
  },
  mounted () {
    this.$emit('sideNavReady')
  }
}
</script>

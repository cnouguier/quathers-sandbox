<template>
  <div>
    <!--
      User's identity
    --> 
    <identity />
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
import config from 'src/configuration.js'

export default {
  name: 'side-nav',
  components: {
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink,
    QItemSeparator,
    'identity': loadComponent(config.sideNav.identity ? config.sideNav.identity : 'layout/Identity')
  },
  data () {
    return {
      links: []
    }
  },
  mounted () {
    if (config.sideNav.links) {
      this.links = config.sideNav.links
    }
    this.$emit('sideNavReady')
  }
}
</script>

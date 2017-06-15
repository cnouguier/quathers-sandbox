<template>
  <div>
    <!-- 
      Filter section 
    -->
    <div v-if="hasFilter">
      <filter v-model="query" @filterChanged="onFilterChanged" />
    </div>
    <!-- 
      Items section 
    -->
    <div v-show="nbTotalItems > 0" class="column justify-center items-center">
      <div class="full-width">
        <div class="list" v-for="item in items">
          <renderer :item="item" :actions="filterActions('item')" @actionTrigerred="onActionTriggered"/>
        </div>
      </div>
      <div>
        <q-pagination v-model="currentPage" :max="nbPages" style="padding: 18px" @input="onPageChanged" />
      </div>
    </div>
    <!-- 
      Fab section 
    -->
    <fab :actions="filterActions()" @actionTrigerred="onActionTriggered" />
  </div>
</template>

<script>
import { loadComponent } from 'src/utils.js'
import config from 'src/configuration.js'
import api from 'src/api'

export default {
  name: 'collection',
  props: {
    service: {
      type: String,
      required: true
    },
    actions: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      query: {},
      items: [],
      nbTotalItems: 0,
      nbItemsPerPage: 8,
      currentPage: 1
    }
  },
  computed: {
    nbPages () {
      return Math.ceil(this.$data.nbTotalItems / this.$data.nbItemsPerPage)
    },
    hasFilter () {
      return this.filter !== ''
    }
  },
  methods: {
    updateItems () {
      // Sets the number of items to be loaded
      if (this.$data.nbItemsPerPage > 0) {
        this.query.$limit = this.$data.nbItemsPerPage
        this.query.$skip = (this.$data.currentPage - 1) * this.$data.nbItemsPerPage
      }
      // find the desire items
      api.service(this.service).find({
        query: this.query
      })
      .then((response) => {
        this.$data.items = response.data
        this.$data.nbTotalItems = response.total
      })
    },
    onPageChanged () {
      this.updateItems()
    },
    onFilterChanged () {
      this.updateItems()
    },
    filterActions (type = '') {
      return this.actions.filter(function (action) {
        return action.scope === type
      })
    },
    onActionTriggered (handler, item) {
      this.$emit('actionTriggered', handler, this.service, item)
    }
  },
  created () {
    // load the configuration
    if (config[this.service]) {
      // setup the filter component if needed
      this.filter = ''
      if (config[this.service].filter) {
        this.filter = config[this.service].filter
        this.$options.components['filter'] = loadComponent(this.filter)
      }
      // setup the renderer component
      if (config[this.service].renderer) {
        this.$options.components['renderer'] = loadComponent(config[this.service].renderer)
      }
      else {
        this.$options.components['renderer'] = loadComponent('collection/Item')
      }
      // setup the fab component
      if (config[this.service].fab) {
        this.$options.components['fab'] = loadComponent(config[this.service].fab)
      }
      else {
        this.$options.components['fab'] = loadComponent('collection/Fab')
      }
      // setup the number of items per page
      if (config[this.service].nbItemsPerPage) {
        this.$data.nbItemsPerPage = config[this.service].nbItemsPerPage
      }
    }
  },
  mounted () {
    // populate the vue
    this.updateItems()
  }
}
</script>

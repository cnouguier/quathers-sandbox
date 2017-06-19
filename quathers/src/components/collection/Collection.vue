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
    <div v-show="nbTotalItems > 0" class="column justify-center items-center content-center">
      <div class="full-width">
        <div class="list no-border" v-for="item in items">
          <renderer :item="item" :actions="filterActions('item')" @actionTrigerred="onActionTriggered" />
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
import logger from 'loglevel'
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
      this.serviceApi.find({
        rx: {
          listStrategy: 'always'
        },
        query: this.query
      }).subscribe(response => {
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
    this.serviceApi = api.service(this.service)
    if (this.serviceApi) {
      // get the configuration section assigned to the service
      let serviceConf = config[this.service]
      // apply the configuration to this collection
      if (serviceConf) {
        // setup the filter component if needed
        this.filter = ''
        if (serviceConf.filter) {
          this.filter = serviceConf.filter
          this.$options.components['filter'] = loadComponent(this.filter)
        }
        // setup the renderer component
        this.$options.components['renderer'] = loadComponent(serviceConf.renderer ? serviceConf.renderer : 'collection/ListItem')
        // setup the fab component
        this.$options.components['fab'] = loadComponent(serviceConf.fab ? serviceConf.fab : 'collection/Fab')
        // setup the number of items per page
        if (serviceConf.nbItemsPerPage) {
          this.$data.nbItemsPerPage = serviceConf.nbItemsPerPage
        }
      }
      else {
        logger.error('created(): ' + this.service + ' configuration section not found.')
      }
    }
    else {
      logger.error('created(): cannot find service ' + this.service)
    }
  },
  mounted () {
    // populate the vue
    this.updateItems()
  }
}
</script>

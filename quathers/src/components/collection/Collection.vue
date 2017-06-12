<template>
  <div>
    <!-- 
      Filter section 
    -->
    <div v-if="hasFilter">
      <filter v-model="query" @filterChanged="onFilterChanged()" />
    </div>
    <!-- 
      Items section 
    -->
    <div v-if="nbTotalItems > 0" class="column justify-center items-center">
      <div class="full-width">
        <div class="list" v-for="item in items">
          <renderer :item="item" />
        </div>
      </div>
      <div>
        <q-pagination 
          v-model="currentPage" 
          :max="nbPages" 
          style="padding: 18px" 
          @input="onPageChanged" />
      </div>
    </div>
    <!-- 
      Fab section 
    -->
    <q-fab v-if="fab.length > 1"
      class="absolute-bottom-right primary"
      style="right: 18px; bottom: 18px"
      icon="keyboard_arrow_up"
      direction="up">
        <q-small-fab v-for="action in fab"
          class="white"
          @click.native="someMethod()"
          :icon="action.icon">
        </q-small-fab>
    </q-fab>
    <button v-else-if="fab.length === 1"
      class="absolute-bottom-right primary circular"
      style="right: 18px; bottom: 18px"
      @click="createItem()">
      <i>{{ fab[0].icon }}</i>
    </button>
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
    }
  },
  data () {
    return {
      query: {},
      items: [],
      nbTotalItems: 0,
      nbItemsPerPage: 8,
      currentPage: 1,
      fab: []
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
    onFilterChanged () {
      this.updateItems()
    },
    onPageChanged () {
      this.updateItems()
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
      // setup the number of items per page
      if (config[this.service].nbItemsPerPage) {
        this.$data.nbItemsPerPage = config[this.service].nbItemsPerPage
      }
      // setup the fab
      if (config[this.service].fab) {
        this.$data.fab = config[this.service].fab
      }
    }
  },
  mounted () {
    this.updateItems()
  }
}
</script>

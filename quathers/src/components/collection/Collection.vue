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
          <renderer :item="item" :actions="itemActions" @actionTrigerred="onActionTriggered"/>
        </div>
      </div>
      <div>
        <q-pagination v-model="currentPage" :max="nbPages" style="padding: 18px" @input="onPageChanged" />
      </div>
    </div>
    <!-- 
      Fab section 
    -->
    <q-fab v-if="floatingActions.length > 1"
      class="absolute-bottom-right primary"
      style="right: 24px; bottom: 24px"
      icon="keyboard_arrow_up"
      direction="up">
        <q-small-fab v-for="action in floatingActions" :key="action.id"
          class="white"
          @click.native="onActionTriggered(action.handler, null)"
          :icon="fab.icon">
        </q-small-fab>
    </q-fab>
    <button v-else-if="floatingActions.length === 1"
      class="absolute-bottom-right primary circular"
      style="right: 24px; bottom: 24px"
      @click="onActionTriggered(floatingActions[0].handler, null)">
      <i>{{ floatingActions[0].icon }}</i>
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
    },
    itemActions: {
      type: Array,
      default: function () {
        return []
      }
    },
    floatingActions: {
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
      // setup the number of items per page
      if (config[this.service].nbItemsPerPage) {
        this.$data.nbItemsPerPage = config[this.service].nbItemsPerPage
      }
    }
  },
  mounted () {
    this.updateItems()
  }
}
</script>

<template>
  <div>
    <!-- Filter section -->
    <div v-show="filter !== ''">
      <component ref="filter" :is="filter" v-model="query"></component>
    </div>
    <!-- Items section -->
    <div v-show="itemsCount > 0" class="column justify-center items-center">
      <div class="full-width">
        <div class="list" v-for="item in items">
          <component :is="renderer" :item="item"></component>
        </div>
      </div>
      <div>
        <q-pagination ref="pagination" v-model="currentPage" :max="pagesCount" style="padding: 18px"></q-pagination>
      </div>
    </div>
    <!-- Actions section -->
    <button v-if="addAction"
      class="absolute-bottom-right primary circular"
      style="right: 18px; bottom: 18px"
      v-on:click="createItem()">
      <i>add</i>
    </button>
  </div>
</template>

<script>
import { Dialog } from 'quasar'
import components from 'src/components'
import api from 'src/api'

export default {
  name: 'collection',
  props: {
    service: {
      type: String,
      required: true
    },
    renderer: {
      type: String,
      default: 'defaultRenderer'
    },
    filter: {
      type: String,
      default: 'defaultFilter'
    },
    addAction: {
      type: Boolean,
      default: true
    },
    pageSize: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      items: [],
      itemsCount: 0,
      itemsPerPage: 0,
      currentPage: 1,
      query: {
      }
    }
  },
  computed: {
    pagesCount () {
      return Math.ceil(this.$data.itemsCount / this.$data.itemsPerPage)
    }
  },
  methods: {
    readItems () {
      // overlaord the numbero of items to be loaded
      if (this.$data.itemsPerPage > 0) {
        this.query.$limit = this.$data.itemsPerPage
        this.query.$skip = (this.$data.currentPage - 1) * this.$data.itemsPerPage
      }
      // find the desires items
      api.service(this.service).find({
        query: this.query
      })
      .then((response) => {
        this.$data.items = response.data
        this.$data.itemsCount = response.total
        if (this.pageSize === 0) {
          this.$data.itemsPerPage = response.limit
        }
      })
    },
    createItem () {
      Dialog.create({
        buttons: [
          'Cancel',
          {
            label: 'Create',
            handler () {
              // this.service().create()
            }
          }
        ]
      })
    },
    updateItem () {
      // this.$router.push({name: 'user'})
    },
    deleteItem (item) {
      Dialog.create({
        message: 'Are you sure you want to delete: ' + item + ' ?',
        buttons: [
          'Cancel',
          {
            label: 'Delete',
            handler () {
              api.service(this.service).remove(item._id)
            }
          }
        ]
      })
    }
  },
  beforeCreate () {
    // load default components
    this.$options.components.defaultFilter = require('src/components/collection/Filter')
    this.$options.components.defaultRenderer = require('src/components/collection/Item')
    // load additionnal renderers
    for (let component of components.collection) {
      this.$options.components[component.name] = component.vue
    }
  },
  mounted () {
    this.$refs.filter.$on('input', () => {
      this.readItems()
    })
    this.$refs.pagination.$on('input', () => {
      this.readItems()
    })
    this.$data.itemsPerPage = this.pageSize
    this.readItems()
  }
}
</script>

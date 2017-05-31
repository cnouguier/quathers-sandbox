<template>
  <div>
    <!-- Filter section -->
    <div class="column justify-center gutter">
      <div>
        <q-search v-model="filter.search" style="padding: 18px"></q-search>
      </div>
    </div>
    <!-- Items section -->
    <div ref="items" class="list" v-for="item in items">
      <component :is="renderer" :item="item"></component>
    </div>
    <!-- Pagination section -->
    <div class="row justify-center" style="padding: 18px">
      <div>
        <q-pagination ref="pagination" v-model="currentPage" :max="pagesCount"></q-pagination>
      </div>
    </div>
    <!-- Add button -->
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
      required: true,
      default: 'item'
    },
    addAction: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      items: [],
      itemsCount: 0,
      itemsLimit: 1,
      currentPage: 1,
      filter: {
        search: ''
      }
    }
  },
  computed: {
    pagesCount () {
      return Math.ceil(this.$data.itemsCount / this.$data.itemsLimit)
    }
  },
  methods: {
    isRenderer (candidate, needed) {
      console.log(candidate)
      console.log(needed)
      return candidate === needed
    },
    listItems () {
      let skipCount = (this.$data.currentPage - 1) * this.$data.itemsLimit
      api.service(this.service).find({
        query: {
          $skip: skipCount
        }
      })
      .then((response) => {
        this.$data.items = response.data
        this.$data.itemsCount = response.total
        this.$data.itemsLimit = response.limit
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
    // load the default Item renderer
    this.$options.components.Item = require('src/components/collection/Item')
    // load additionnal renderers
    for (let component of components.collection) {
      this.$options.components[component.name] = component.vue
    }
  },
  mounted () {
    this.$refs.pagination.$on('input', () => {
      this.listItems()
    })
    this.listItems()
  }
}
</script>

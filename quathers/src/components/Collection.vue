<template>
  <div>
    <!-- Filter section -->
    <div class="column justify-center gutter">
      <div>
        <q-search v-model="search" style="padding: 18px"></q-search>
      </div>
    </div>
    <!-- Items section -->
    <q-infinite-scroll :handler="loadMore">
      <div class="list item-delimiter group" v-for="item in items">
        <q-collapsible :avatar="item.avatar" :label="item.label">
          <div class="card ">
            <div class="card-content">
              <div class="row justify-between">
                <div>
                  <slot name="item-content" :item="item"></slot>
                </div>
                <div>
                  <button class="primary clear circular small" @click="editItem(item)">
                    <i>create</i>
                  </button>
                  <button class="primary clear circular small" @click="deleteItem(item)">
                    <i>delete</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </q-collapsible>
      </div>
      <div class="row justify-center" style="margin-bottom: 50px;">
          <spinner name="dots" slot="message" :size="40"></spinner>
      </div>
    </q-infinite-scroll>

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
import api from 'src/api'

export default {
  name: 'collection',
  props: {
    service: {
      type: String,
      required: true
    },
    addAction: {
      type: Boolean,
      default: true
    },
    editAction: {
      type: Boolean,
      default: true
    },
    deleteAction: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      items: [],
      search: '',
      page: 1
    }
  },
  methods: {
    listItems () {
      api.service(this.service).find()
      .then((response) => {
        this.$data.items = response.data
      })
    },
    createItem () {
      Dialog.create({
        title: 'New',
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
  mounted () {
    this.listItems()
  }
}
</script>

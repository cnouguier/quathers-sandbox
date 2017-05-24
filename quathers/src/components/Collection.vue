<template>
  <div>
    <div class="column justify-center gutter">
      <div>
        <q-search v-model="search" style="padding: 18px"></q-search>
      </div>
      <div>
        <div class="list item-delimiter highlight">
          <div class="item two-lines" v-for="item in items">
            <img class="item-primary" :src='item.avatar'>
              <div class="item-content has-secondary">
                <div>{{item.primaryLabel}}</div>
                <div>{{item.secondaryLabel}}</div>
            </div>
            <div class="item-secondary">
              <i>
                more_vert
                <q-popover ref="popover">
                  <div class="list item-delimiter highlight" v-for="action in actions">
                    <div class="item item-link" v-on:click="trigger(action.handler,item)">
                      <i class="item-primary">{{action.icon}}</i>
                      <div class="item-content">{{action.label}}</div>
                    </div>
                  </div>
                </q-popover>
              </i>
            </div>
          </div>
        </div>
      </div>
      <div class="self-center">
        <q-pagination v-model="page" :max="1"></q-pagination>
      </div>
    </div>
    <!--
      FAB to add an item
     -->
    <button v-if="onAdd !== null"
      class="absolute-bottom-right primary circular"
      style="right: 18px; bottom: 18px">
      <i>add</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'collection',
  props: {
    items: {
      type: Array
    },
    actions: {
      type: Array,
      default: []
    },
    onAdd: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      search: '',
      page: 1
    }
  },
  methods: {
    trigger (handler, item) {
      handler(item)
    }
  }
}
</script>

<style>
</style>

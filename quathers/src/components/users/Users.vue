<template>
  <collection ref="collection" :service="'users'">
    <template slot="item" scope="props">
      <div class="item two-lines">
        <img class="item-primary" :src="props.item.avatar">
        <div class="item-content has-secondary">
          <div>{{ props.item.firstName }} {{ props.item.lastName }}</div>
          <div>{{ props.item.email }}</div>
        </div>
          <i class="item-secondary">  
            more_vert
            <q-popover>
              <div class="list">
                <div class="item item-link" @click="$refs.collection.updateItem(props.item)">
                  <div class="item-content">Edit</div>
                </div>
                <div class="item item-link" @click="$refs.collection.deleteItem(props.item)">
                  <div class="item-content">Delete</div>
                </div>
              </div>
            </q-popover>
          </i>
        </div>
      </div>
    </template>
  </collection>
</template>

<script>
import Collection from 'src/components/Collection'

export default {
  name: 'users',
  components: {
    Collection
  },
  data () {
    return {
    }
  }
}
</script>

<template>
  <collection ref="collection" :service="'organizations'">
    <template slot="item" scope="props">
      <div class="item two-lines">
        <div class="item-content has-secondary">
          <div>{{ props.item.name }}</div>
          <div>{{ props.item.description }}</div>
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
  name: 'organizations',
  components: {
    Collection
  },
  data () {
    return {
    }
  }
}
</script>

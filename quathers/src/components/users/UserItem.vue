<template>
    <div class="item two-lines">
        <img class="item-primary" :src="item.avatar">
        <div class="item-content has-secondary">
            <div>{{ item.firstName }} {{ item.lastName }}</div>
            <div>{{ item.email }}</div>
        </div>
            <i class="item-secondary">  
            more_vert
            <q-popover>
                <div class="list">
                <div class="item item-link" @click="$refs.collection.updateItem(item)">
                    <div class="item-content">Edit</div>
                </div>
                <div class="item item-link" @click="$refs.collection.deleteItem(item)">
                    <div class="item-content">Delete</div>
                </div>
                </div>
            </q-popover>
            </i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'user-item',
  props: {
    item: null
  },
  data () {
    return {
    }
  }
}
</script>

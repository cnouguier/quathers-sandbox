<template>
  <div class="item two-lines">
        <div class="item-content has-secondary">
            <div>{{ item.name }}</div>
            <div>{{ item.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item: null
  },
  data () {
    return {
    }
  }
}
</script>

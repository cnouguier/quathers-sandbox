import mixinStore from '../mixin-store'

let deleteItemMixin = {
  methods: {
    deleteItem () {
      console.log('deleteItem')
    }
  }
}

mixinStore.set('deleteItem', deleteItemMixin)

export default deleteItemMixin

import mixinStore from '../mixin-store'

let editItemMixin = {
  methods: {
    editItem () {
      console.log('deleteItem')
    }
  }
}

mixinStore.set('editItem', editItemMixin)

export default editItemMixin

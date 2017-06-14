import mixinStore from '../mixin-store'

let deleteItemMixin = {
  methods: {
    deleteItem (item) {
      console.log('delete')
      console.log(item)
    }
  },
  mounted () {
    let action = {
      label: 'Delete',
      handler: 'deleteItem'
    }
    this.itemActions.push(action)
    console.log('Delete action pushed')
  }
}

mixinStore.set('deleteItem', deleteItemMixin)

export default deleteItemMixin

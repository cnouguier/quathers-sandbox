import mixinStore from '../mixin-store'

let deleteItemMixin = {
  methods: {
    deleteItem (service, item) {
      console.log(service + ': deleteItem from mixin')
    }
  },
  mounted () {
    let action = {
      label: 'Delete',
      handler: 'deleteItem'
    }
    this.itemActions.push(action)
  }
}

mixinStore.set('deleteItem', deleteItemMixin)

export default deleteItemMixin

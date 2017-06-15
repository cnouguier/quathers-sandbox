import mixinStore from '../mixin-store'

let deleteItemMixin = {
  methods: {
    deleteItem (service, item) {
      console.log(service + ': deleteItem from mixin')
    }
  },
  mounted () {
    this.itemActions.push({
      label: 'Delete',
      handler: 'deleteItem'
    })
  }
}

mixinStore.set('deleteItem', deleteItemMixin)

export default deleteItemMixin

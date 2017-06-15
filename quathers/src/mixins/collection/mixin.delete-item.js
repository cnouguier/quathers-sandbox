import mixinStore from '../mixin-store'

let deleteItemMixin = {
  methods: {
    deleteItem (service, item) {
      console.log(service + ': deleteItem from mixin')
    }
  },
  mounted () {
    this.actions.push({
      label: 'Delete',
      scope: 'item',
      handler: 'deleteItem'
    })
  }
}

mixinStore.set('deleteItem', deleteItemMixin)

export default deleteItemMixin

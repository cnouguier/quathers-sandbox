import mixinStore from '../mixin-store'

let editItemMixin = {
  methods: {
    editItem (service, item) {
      console.log(service + ': editItem from mixin')
    }
  },
  mounted () {
    this.itemActions.push({
      label: 'Edit',
      handler: 'editItem'
    })
  }
}

mixinStore.set('editItem', editItemMixin)

export default editItemMixin

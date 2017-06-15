import mixinStore from '../mixin-store'

let editItemMixin = {
  methods: {
    editItem (service, item) {
      console.log(service + ': editItem from mixin')
    }
  },
  mounted () {
    this.actions.push({
      label: 'Edit',
      scope: 'item',
      handler: 'editItem'
    })
  }
}

mixinStore.set('editItem', editItemMixin)

export default editItemMixin

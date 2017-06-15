import mixinStore from '../mixin-store'

let editItemMixin = {
  methods: {
    editItem (service, item) {
      console.log(service + ': editItem from mixin')
    }
  },
  mounted () {
    let action = {
      label: 'Edit',
      handler: 'editItem'
    }
    this.itemActions.push(action)
  }
}

mixinStore.set('editItem', editItemMixin)

export default editItemMixin

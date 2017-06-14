import mixinStore from '../mixin-store'

let editItemMixin = {
  methods: {
    editItem (item) {
      console.log('edit')
      console.log(item)
    }
  },
  mounted () {
    let action = {
      label: 'Edit',
      handler: 'editItem'
    }
    this.itemActions.push(action)
    console.log('Edit action pushed')
  }
}

mixinStore.set('editItem', editItemMixin)

export default editItemMixin

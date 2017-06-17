import mixinStore from '../mixin-store'
import store from 'src/store'

let editItemMixin = {
  methods: {
    editItem (service, item) {
      store.formStates.target = item
      let routeName = service + '-form'
      console.log(routeName)
      this.$router.push({name: routeName})
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

import mixinStore from '../mixin-store'

let createItemMixin = {
  methods: {
    createItem (service) {
      console.log(service + ': createItem from mixin')
    }
  },
  mounted () {
    let action = {
      icon: 'add',
      handler: 'createItem'
    }
    this.floatingActions.push(action)
  }
}

mixinStore.set('createItem', createItemMixin)

export default createItemMixin

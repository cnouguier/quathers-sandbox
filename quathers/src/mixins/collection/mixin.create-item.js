import mixinStore from '../mixin-store'

let createItemMixin = {
  methods: {
    createItem (service) {
      console.log(service + ': createItem from mixin')
    }
  },
  mounted () {
    this.floatingActions.push({
      icon: 'add',
      handler: 'createItem'
    })
  }
}

mixinStore.set('createItem', createItemMixin)

export default createItemMixin

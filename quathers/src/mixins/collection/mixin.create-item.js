import mixinStore from '../mixin-store'

let createItemMixin = {
  methods: {
    createItem () {
      console.log('createItem')
    }
  },
  mounted () {
    console.log('createItem - mounted')
    this.$data.fab.push({
      icon: 'add'
    })
  }
}

mixinStore.set('createItem', createItemMixin)

export default createItemMixin

import mixinStore from '../mixin-store'
import { Dialog } from 'quasar'

let deleteItemMixin = {
  methods: {
    deleteItem (service, item) {
      Dialog.create({
        title: 'Warning',
        message: 'Are you sure you want to delete ' + item.name + '?',
        buttons: [
          'Cancel',
          {
            label: 'Delete',
            handler () {
              console.log('Not implemented')
            }
          }
        ]
      })
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

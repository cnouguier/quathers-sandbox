import mixinStore from '../mixin-store'
import Collection from 'src/components/collection/Collection'

let collectionBaseMixin = {
  components: {
    Collection
  },
  data () {
    return {
      floatingActions: [],
      itemActions: []
    }
  },
  methods: {
    onActionTriggered (action, item) {
      let handler = this[action]
      if (handler !== null) {
        handler(item)
      }
    }
  }
}

mixinStore.set('collectionBase', collectionBaseMixin)

export default collectionBaseMixin

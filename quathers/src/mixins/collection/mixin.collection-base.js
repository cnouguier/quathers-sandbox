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
    onActionTriggered (handler, service, item) {
      let action = this[handler]
      action.apply(this, [service, item])
    }
  }
}

mixinStore.set('collectionBase', collectionBaseMixin)

export default collectionBaseMixin

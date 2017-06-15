import logger from 'loglevel'
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
      if (typeof action === 'function') {
        action.apply(this, [service, item])
      }
      else {
        logger.warn('onActionTriggered: invalid handler')
      }
    }
  }
}

mixinStore.set('collectionBase', collectionBaseMixin)

export default collectionBaseMixin

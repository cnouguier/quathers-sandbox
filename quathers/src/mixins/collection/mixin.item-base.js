import logger from 'loglevel'
import mixinStore from '../mixin-store'

let itemBaseMixin = {
  props: {
    item: {
      type: Object,
      required: true
    },
    actions: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    onActionTriggered (handler, item) {
      logger.debug('onActionTrigger: ' + handler)
      this.$emit('actionTrigerred', handler, item)
    }
  }
}

mixinStore.set('itemBase', itemBaseMixin)

export default itemBaseMixin

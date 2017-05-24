import { getItems, replaceItems } from 'feathers-hooks-common'
import crypto from 'crypto'

// The Gravatar image service
const gravatarUrl = 'https://s.gravatar.com/avatar'
// The size query. Our chat needs 60px images
const size = 's=200'

module.exports = function () {
  return function (hook) {
    let items = getItems(hook)
    const isArray = Array.isArray(items)
    items = (isArray ? items : [items])

    items.forEach(item => {
      let hash = crypto.createHash('md5').update(item.email).digest('hex')
      item.avatar = `${gravatarUrl}/${hash}?${size}`
    })
    
    replaceItems(hook, isArray ? items : items[0])
  }
}


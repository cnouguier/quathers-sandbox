const crypto = require('crypto')
// The Gravatar image service
const gravatarUrl = 'https://s.gravatar.com/avatar'
// The size query. Our chat needs 60px images
const size = 's=200'

module.exports = function() {
  return function(hook) {
    // The user email
    const email = hook.result.email 
    const hash = crypto.createHash('md5').update(email).digest('hex')
    hook.result.avatar = `${gravatarUrl}/${hash}?${size}`
    return Promise.resolve(hook);
  }
}
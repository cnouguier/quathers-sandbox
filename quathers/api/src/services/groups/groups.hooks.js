const { authenticate } = require('feathers-authentication').hooks;
import { softDelete, setNow } from 'feathers-hooks-common'


module.exports = {
  before: {
    all: [ authenticate('jwt'), softDelete() ],
    find: [],
    get: [],
    create: [ setNow('createdAt', 'updatedAt') ],
    update: [ setNow('updatedAt') ],
    patch: [ setNow('updatedAt') ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

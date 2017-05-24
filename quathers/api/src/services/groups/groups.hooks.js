const { authenticate } = require('feathers-authentication').hooks;
const { setCreatedAt, softDelete } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [ authenticate('jwt'), softDelete() ],
    find: [],
    get: [],
    create: [ setCreatedAt() ],
    update: [],
    patch: [],
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

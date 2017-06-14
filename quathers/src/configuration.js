module.exports = {
  app: {
    name: 'My App'
  },
  layout: {
    // appBar: 'layout/AppBar',
    // sideNav: 'layout/SideNav'
  },
  appBar: {
  },
  sideNav: {
    // identity: 'layout/Identity'
    links: [
      { label: 'Users', icon: 'person', route: 'users' },
      { label: 'Groups', icon: 'group', route: 'groups' },
      { label: 'Organizations', icon: 'domain', route: 'organizations' },
      {
        // a separator
      },
      { label: 'Logout', icon: 'exit_to_app', route: 'logout' }
    ]
  },
  users: {
    // filter: 'collection/Filter',
    renderer: 'users/UserItem',
    // nbItemsPerPage: '8',
    mixins: [ 'collectionBase', 'createItem', 'deleteItem', 'editItem' ]
  },
  groups: {
    // filter: 'collection/Filter',
    // renderer: 'collection/Item',
    // nbItemsPerPage: '8',
    mixins: [ 'collectionBase', 'createItem', 'deleteItem', 'editItem' ]
  },
  organizations: {
    // filter: 'collection/Filter',
    // renderer: 'collection/Item',
    // nbItemsPerPage: '8',
    mixins: [ 'collectionBase', 'createItem', 'deleteItem', 'editItem' ]
  }
}

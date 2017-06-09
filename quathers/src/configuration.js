module.exports = {
  app: {
    name: 'Quathers'
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
      {
        label: 'Users',
        icon: 'person',
        route: 'users'
      },
      {
        label: 'Groups',
        icon: 'group',
        route: 'groups'
      },
      {
        label: 'Organizations',
        icon: 'domain',
        route: 'organizations'
      },
      {
        // separator
      },
      {
        label: 'Logout',
        icon: 'exit_to_app',
        route: 'logout'
      }
    ]
  }
}

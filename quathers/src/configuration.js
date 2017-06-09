module.exports = {
  app: {
    name: 'Quathers'
  },
  layout: {
    appBar: 'AppBar',
    sideNav: 'SideNav'
  },
  appBar: {
  },
  sideNav: {
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

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
    primaryLinks: [
          // to be personalized
    ],
    secondaryLinks: [
      {
        name: 'Users',
        icon: 'person',
        route: 'users'
      },
      {
        name: 'Groups',
        icon: 'group',
        route: 'groups'
      },
      {
        name: 'Organizations',
        icon: 'domain',
        route: 'organizations'
      }
    ]
  }
}

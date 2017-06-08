module.exports = {
  app: {
    name: 'Quathers',
    layout: {
      component: 'Layout',
      appBar: {
        component: 'AppBar'
      },
      sideNav: {
        component: 'SideNav',
        primaryLinks: [],
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
  }
}
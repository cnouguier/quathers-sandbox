import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'src/store.js'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  routes: [
    {
      path: '/',
      name: 'index',
      component: load('Index'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: load('authentication/LogIn')
        },
        {
          path: '/logout',
          name: 'logout',
          component: load('authentication/Logout')
        },
        {
          path: '/register',
          name: 'register',
          component: load('authentication/Register')
        },
        {
          path: '/resetpassword',
          name: 'resetPassword',
          component: load('authentication/ResetPassword')
        },
        {
          path: '/home',
          name: 'home',
          component: load('Home'),
          beforeEnter: (to, from, next) => {
            if (store.userStates.user !== null) {
              next()
            }
            else {
              console.log('Access forbidden: please log in to access this page.')
            }
          }
        },
        {
          path: '/users',
          name: 'users',
          component: load('users/Users')
        },
        {
          path: '/editor/:objectId',
          name: 'editor',
          component: load('editor/Editor')
        },
        {
          path: '/groups',
          name: 'groups',
          component: load('groups/Groups'),
          children: [
            {
              path: '/group',
              name: 'group',
              component: load('groups/Group')
            }
          ]
        },
        {
          path: '/organizations',
          name: 'organizations',
          component: load('organizations/Organizations'),
          children: [
            {
              path: '/organization',
              name: 'organization',
              component: load('organizations/organization')
            }
          ]
        }
      ]
    },
    {
      path: '*',
      component: load('Error404')
    } // Not found
  ]
})

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
          path: '/profile',
          name: 'profile',
          component: load('form/Form'),
          props: true
        },
        {
          path: '/users',
          name: 'users',
          component: load('users/Users')
        },
        {
          path: '/users/form',
          name: 'users-form',
          component: load('form/Form')
        },
        {
          path: '/groups',
          name: 'groups',
          component: load('groups/Groups')
        },
        {
          path: '/groups/form',
          name: 'groups-form',
          component: load('form/Form')
        },
        {
          path: '/organizations',
          name: 'organizations',
          component: load('organizations/Organizations')
        },
        {
          path: '/organizations/form',
          name: 'organizations-form',
          component: load('form/Form')
        }
      ]
    },
    {
      path: '*',
      component: load('Error404')
    } // Not found
  ]
})

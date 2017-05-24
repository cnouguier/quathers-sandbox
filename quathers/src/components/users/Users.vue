<template>
 <div>
  <collection :items="users" :actions="actions" :onAdd="addUser"></collection>
 </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'
import Collection from 'src/components/Collection'
import api from 'src/api'

const usersService = api.service('users')

export default {
  name: 'users',
  components: {
    Collection
  },
  data () {
    return {
      users: [],
      actions: [
        {
          label: 'Edit',
          icon: 'create',
          handler: 'editUser'
        },
        {
          label: 'Delete',
          icon: 'delete',
          handler: 'deleteUser'
        }
      ]
    }
  },
  methods: {
    addUser () {
    },
    editUser (user) {
      // tdoo
    },
    deleteUser (user) {
      console.log(user._id)
      Dialog.create({
        title: 'Warning',
        message: 'Are you sure you want to delete the user \'' + user.firstName + ' ' + user.lastName + '\' ?',
        buttons: [
          'Cancel',
          {
            label: 'Delete',
            handler () {
              api.service('users').remove(user._id)
              .catch(_ => {
                Toast.create.negative('error while deleting ' + user._id)
              })
            }
          }
        ]
      })
    }
  },
  mounted () {
    // Get all users
    usersService.find()
    .then((response) => {
      this.$data.users = response.data
    })
  }
}
</script>

<style>
</style>

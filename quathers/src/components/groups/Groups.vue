<template>
  <div>
    <div style="padding:18px">
      <q-search v-model="search"></q-search>
    </div>
    <div class="list item-delimiter highlight">
      <div class="item two-lines" v-for="user in users">
        <img class="item-primary" :src='user.avatar'>
        <div class="item-content has-secondary">
          <div>{{user.firstName}} {{user.lastName}}</div>
          <div>{{user.email}}</div>
        </div>
        <div class="item-secondary">
          <i>
          more_vert
          <q-popover ref="popover">
            <div class="list item-delimiter highlight">
              <div class="item item-link" v-on:click="edit(user)">
                <i class="item-primary">create</i>
                <div class="item-content">Edit</div>
              </div>
              <div class="item item-link" v-on:click="remove(user)">
                <i class="item-primary">delete</i>
                <div class="item-content">Delete</div>
              </div>
            </div>
          </q-popover>
        </i>
      </div>
    </div>
    </div>
    <button 
      class="absolute-bottom-right primary circular"
      style="right: 18px; bottom: 18px"
      @click="$router.push('userform')">
      <i>person_add</i>
    </button>
  </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'
import api from 'src/api'

const usersService = api.service('users')

export default {
  data () {
    return {
      users: [],
      search: ''
    }
  },
  methods: {
    edit (user) {
    },
    remove (user) {
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

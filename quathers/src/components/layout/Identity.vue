<template>
  <div class="column justify-center bg-dark text-light" style="padding:18px">
    <div class="self-center">
      <img :src="user.avatar" style="border-radius:50%" width="96px" height="96px">
    </div>
    <div>
      <div class="row justify-between items-center">
        <div>
          <h6>{{user.firstName}} {{user.lastName}}</h6>
        </div>
        <div>
          <button class="circular clear" v-on:click="profile">
            <i>perm_identity</i>
          </button>
        </div>
      </div>
    </div>
  </div>
  </q-drawer>
</template>

<script>
import store from 'src/store'

export default {
  name: 'identity',
  data () {
    return {}
  },
  computed: {
    user () {
      return store.userStates.user
    }
  },
  methods: {
    profile () {
      this.$router.push({name: 'profile'})
    }
  },
  mounted () {
    this.$emit('identityReady')
  }
}
</script>

<template>
  <div class="column bg-dark text-light" style="padding: 18px">
    <div class="row justify-center">
      <div class="col-auto" style="padding: 8px">
        <img :src="user.avatar" style="border-radius:50%" width="96px" height="96px">
      </div>
    </div>
    <div>
      <div class="row justify-around">
        <div>
          <h6>{{user.firstName}} {{user.lastName}}</h6>
        </div>
        <div>
          <q-btn flat icon="perm_identity" @click="profile" />
        </div>
      </div>
    </div>
  </div>
  </q-drawer>
</template>

<script>
import { QBtn } from 'quasar'
import store from 'src/store'

export default {
  name: 'identity',
  components: {
    QBtn
  },
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
      store.formStates.target = this.user
      this.$router.push({name: 'profile'})
    }
  },
  mounted () {
    this.$emit('identityReady')
  }
}
</script>

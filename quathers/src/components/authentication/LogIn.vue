<template>
  <screen
    title="Log In"
    v-bind:invalid=$v.form.$invalid
    v-on:closed="$router.push('/')"
    v-on:submitted="doLogin()"
    >
    <div class="column gutter justify-center">
      <!-- Email -->
      <div>
        <div class="floating-label">
          <input required type="text" class="full-width" v-model="form.email" @input="$v.form.email.$touch()" v-bind:class="{'has-error': $v.form.email.$error}">
          <label>Email Address</label>
          <q-tooltip v-show="!$v.form.email.email">
            This field must be a valid email address
          </q-tooltip>
        </div>
      </div>
      <!-- Password -->
      <div>
        <div>
          <div class="floating-label">
            <input required type="password" class="full-width" v-model="form.password" @input="$v.form.password.$touch()" v-bind:class="{'has-error': $v.form.password.$error}">
            <label>Password</label>
            <q-tooltip v-show="!$v.form.password.minLength">
              This field must have at least {{ $v.form.password.$params.minLength.min }} characters
            </q-tooltip>
          </div>
        </div>
        <div>
          <router-link to="/resetpassword">
            Forgot your password ?
          </router-link>
        </div>

      </div>
    </div>
    <div slot="footer" class="row justify-center">
      <div>
        Don't have an account ?
        <button class="primary clear centered small" @click="$router.push('register')">Register</button>
      </div>
    </div>
  </screen>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import { Toast } from 'quasar'
import Screen from 'src/components/Screen'
import authenticationMixin from 'src/mixins/authentication'

Vue.use(Vuelidate)

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    doLogin () {
      this.login(this.$data.form.email, this.$data.form.password)
      .catch(_ => {
        Toast.create.negative('Cannot login. Please check your credentials and try again.')
      })
    }
  },
  mixins: [authenticationMixin],
  components: {
    'screen': Screen
  }
}
</script>

<style>
</style>

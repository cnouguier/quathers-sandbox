<template>
  <screen
    title="Reset Password"
    v-bind:invalid=$v.form.$invalid
    v-on:closed="$router.push('login')"
    v-on:submitted="doResetPassword()"
    >
    <div class="column gutter justify-center">
      <!-- Information -->
      <div>
        We'll send you password reset instructions to the email address below.
      </div>
      <!-- Email -->
      <div>
        <div class="floating-label">
          <input required type="text" class="full-width" v-model="form.email" @input="$v.form.email.$touch()" v-bind:class="{'has-error': $v.form.email.$error}">
          <label>Email Address</label>
        </div>
        <q-tooltip v-show="!$v.form.email">
          This field must be a valid email address
        </q-tooltip>
      </div>
    </div>
  </screen>
</template>

<script>
  import Vue from 'vue'
  import Vuelidate from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  import { Toast } from 'quasar'
  import Screen from 'src/components/Screen'

  Vue.use(Vuelidate)

  export default {
    name: 'reset-password',
    components: {
      Screen
    },
    data () {
      return {
        form: {
          email: ''
        }
      }
    },
    validations: {
      form: {
        email: {
          required,
          email
        }
      }
    },
    methods: {
      doResetPassword () {
        Toast.create.negative('To be implemented')
      }
    }
  }
</script>

<style>
</style>

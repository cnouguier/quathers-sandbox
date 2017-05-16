<template>
  <screen
    title="Reset Password"
    v-bind:invalid=$v.form.$invalid
    v-on:closed="$router.push('/')"
    v-on:submitted="doChangePassword()"
    >
    <div class="column gutter justify-center">
      <!-- Information -->
      <div>
        We'll send you password reset instructions to the email address below.
      </div>
      <!-- Password -->
      <div>
        <div class="floating-label">
          <input required type="password" class="full-width" v-model="form.password" @input="$v.form.password.$touch()" v-bind:class="{'has-error': $v.form.password.$error}">
          <label>Password</label>
          <q-tooltip v-show="!$v.form.password.minLength">
            This field must have at least {{ $v.form.password.$params.minLength.min }} characters
          </q-tooltip>
        </div>
      </div>
      <!-- Confirm Password  -->
      <div>
        <div class="floating-label">
          <input required type="password" class="full-width" v-model="form.confirmPassword" @input="$v.form.confirmPassword.$touch()" v-bind:class="{'has-error': $v.form.confirmPassword.$error}">
          <label>Confirm Password</label>
        </div>
      </div>
    </div>
  </screen>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import { Toast } from 'quasar'
import Screen from 'src/components/Screen'

Vue.use(Vuelidate)

export default {
  data () {
    return {
      form: {
        password: '',
        confirmPassword: ''
      }
    }
  },
  validations: {
    form: {
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    doCangePassword () {
      Toast.create.negative('To be implemented')
    }
  },
  components: {
    'screen': Screen
  }
}
</script>

<style>
</style>

<template>
  <screen
    title="Register"
    v-bind:invalid=$v.form.$invalid
    v-on:closed="$router.push('/')"
    v-on:submitted="submit()">
    <div class="column gutter justify-center">
      <!-- Fist name -->
      <div>
        <div class="floating-label">
          <input required type="text" class="full-width" v-model="form.firstName" @input="$v.form.firstName.$touch()" v-bind:class="{'has-error': $v.form.firstName.$error}">
          <label>First Name</label>
          <q-tooltip v-show="!$v.form.firstName.minLength">
            This field must have at least {{ $v.form.firstName.$params.minLength.min }} characters
          </q-tooltip>
        </div>
      </div>
      <!-- Last name -->
      <div>
        <div class="floating-label">
          <input required type="text" class="full-width" v-model="form.lastName" @input="$v.form.lastName.$touch()" v-bind:class="{'has-error': $v.form.lastName.$error}">
          <label>Last Name</label>
        </div>
        <q-tooltip v-show="!$v.form.lastName.minLength">
          This field must have at least {{ $v.form.lastName.$params.minLength.min }} characters
        </q-tooltip>
      </div>
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
      <!-- Terms & conditions -->
      <div class="self-center">
        <label>
          <q-checkbox class="primary" v-model="form.policiesAccepted"></q-checkbox>
          By signing up, you are accepting our terms &amp; conditions
        </label>
      </div>
    </div>
    <div slot="footer" class="row justify-center">
      <div>
        Already have an account ?
        <q-btn color="primary" flat centered small @click="$router.push('login')">Log In</q-btn>
      </div>
    </div>
  </screen>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { QBtn, Toast } from 'quasar'
import Screen from 'src/components/Screen'
import { register } from 'src/authentication'

Vue.use(Vuelidate)

export default {
  name: 'register',
  components: {
    QBtn,
    Screen
  },
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        policiesAccepted: false
      }
    }
  },
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(1)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    submit () {
      register(this.$data.form)
      .then(_ => {
        this.$router.push({name: 'home'})
      })
      .catch(_ => {
        Toast.create.negative('Cannot register. Please contact our support.')
      })
    }
  }
}
</script>

<style>
</style>

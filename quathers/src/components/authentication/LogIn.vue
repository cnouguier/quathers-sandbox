<template>
  <screen
    title="Log In"
    v-bind:invalid=$v.form.$invalid
    v-on:closed="$router.push('/')"
    v-on:submitted="submit()"
    >
    <div slot="form" class="column justify-center">
      <!-- Email -->
      <q-field
        icon="mail"
        label="Email"
        :label-width="2"
        helper="Type your email"
        :error="$v.form.email.$error"
        error-label="Please type a valid email"
      >
        <q-input type="email" v-model="form.email" @blur="$v.form.email.$touch" />
      </q-field>
      <!-- Password -->
      <q-field
        icon="lock"
        label="Password"
        :label-width="2"
        helper="Type your password"
        :error="$v.form.password.$error"
        error-label="Please type a valid password"
        :count="24"
      >
        <q-input type="password" max-length="16" v-model="form.password" />
      </q-field>
    </div>
    <div slot="footer" class="row justify-center">
      <div>
        Don't have an account ?
        <q-btn color="primary" flat centered small @click="$router.push('register')">Register</q-btn>
      </div>
    </div>
  </screen>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import { QField, QInput, QBtn, Toast } from 'quasar'
import Screen from 'src/components/Screen'
import { login } from 'src/authentication'

Vue.use(Vuelidate)

export default {
  name: 'login',
  components: {
    QField,
    QInput,
    QBtn,
    Screen
  },
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
    submit () {
      login(this.$data.form.email, this.$data.form.password)
      .catch(_ => {
        Toast.create.negative('Cannot login. Please check your credentials and try again.')
      })
    }
  }
}
</script>

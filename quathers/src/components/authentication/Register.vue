<template>
  <screen title="Log In" :isClosable=false>
    <div slot="content" class="column justify-center">
      <q-field
        icon="email"
        label="email"
        :label-width="3"
        helper="Type your email"
        :error="$v.form.email.model.$error"
        error-label="Type a valid email"
      >
        <q-input
          type="email"
          v-model="form.email.model"
          @blur="$v.form.email.model.$touch" />
      </q-field>
      <q-field
        icon="password"
        label="password"
        :label-width="3"
        helper="Type your passwaord"
        :error="$v.form.password.model.$error"
        error-label="Type a valid password"
      >
        <q-input
          type="password"
          v-model="form.password.model"
          @blur="$v.form.password.model.$touch" />
      </q-field>
    </div>
  </screen>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { QField, QInput, QBtn, Toast } from 'quasar'
import Screen from 'src/components/Screen'
import { register } from 'src/authentication'

Vue.use(Vuelidate)

export default {
  name: 'register',
  components: {
    QField,
    QInput,
    QBtn,
    Screen
  },
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: {
          model: ''
        },
        password: {
          model: ''
        },
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
        model: {
          required,
          email
        }
      },
      password: {
        model: {
          required,
          minLength: minLength(8)
        }
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

<template>
  <screen title="Log In" :isClosable=false>
    <div slot="content" class="column justify-center">
      <!-- 
        Login form 
       -->
      <q-form :schema="schema" submitButton="Log In" @submitted="submit" />
      <!-- 
        Register link 
       -->
      <div class="self-center">
        Don't have an account ?
        <q-btn color="primary" flat centered @click="$router.push('register')">Register</q-btn>
      </div>
    </div>
  </screen>
</template>

<script>
import { QBtn } from 'quasar'
import Screen from 'src/components/Screen'
import QForm from 'src/components/form/QForm'
import { login } from 'src/authentication'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  components: {
    QBtn,
    QForm,
    Screen
  },
  // TODO: define a library of fields to be included within a schema
  data () {
    return {
      schema: {
        email: {
          type: 'email',
          model: '',
          label: 'Email',
          icon: 'email',
          helper: 'Type your email',
          errorLabel: 'Please, type a valid email',
          validators: {
            email,
            required
          }
        },
        password: {
          type: 'password',
          model: '',
          label: 'Password',
          icon: 'lock',
          helper: 'Type your password',
          errorLabel: 'Please, type a valid password',
          count: 16,
          validators: {
            minLength: minLength(8),
            maxLength: maxLength(16),
            required
          }
        }
      }
    }
  },
  methods: {
    submit (data) {
      login(data.email, data.password)
    }
  }
}
</script>

<template>
  <screen title="Log In" :isClosable=false>
   <div slot="content" class="column justify-center">
      <!-- 
        Register form 
       -->
      <q-form :schema="schema" submitButton="Register" @submitted="onSubmitted" />
      <!-- 
        Log In link 
       -->
      <div class="self-center">
        Already have an account ?
        <q-btn color="primary" flat small centered @click="$router.push('login')">Log In</q-btn>
      </div>
    </div>
  </screen>
</template>

<script>
import { QBtn } from 'quasar'
import QForm from 'src/components/form/QForm'
import Screen from 'src/components/Screen'
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import { register } from 'src/authentication'

export default {
  name: 'register',
  components: {
    QForm,
    QBtn,
    Screen
  },
  data () {
    return {
      schema: {
        name: {
          type: 'text',
          model: '',
          label: 'Name',
          helper: 'Type your name',
          errorLabel: 'Please, type a valid name',
          count: 24,
          validators: {
            minLength: minLength(6),
            maxLength: maxLength(24),
            required
          }
        },
        email: {
          type: 'email',
          model: '',
          label: 'Email',
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
          helper: 'Type your password',
          errorLabel: 'Please, type a valid password',
          count: 16,
          validators: {
            minLength: minLength(8),
            maxLength: maxLength(16),
            required
          }
        },
        confirmPassword: {
          type: 'password',
          model: '',
          label: 'Confirm Password',
          helper: 'Type your password again',
          errorLabel: 'Please, type a valid password',
          count: 16,
          validators: {
            sameAs: sameAs('password.model')
          }
        }
      }
    }
  },
  methods: {
    onSubmitted () {
      register(this.$data.form)
      .then(_ => {
        this.$router.push({name: 'home'})
      })
    }
  }
}
</script>

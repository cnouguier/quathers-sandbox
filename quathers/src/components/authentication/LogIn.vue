<template>
  <screen title="Log In" :isClosable=false>
    <div slot="content" class="column justify-center">
      <!-- Form -->
      <q-form :schema="schema" submitButtonLabel="Log In" @submitted="submit" />
      <!-- -->
      <div class="self-center">
        Don't have an account ?
        <q-btn color="primary" flat centered @click="$router.push('register')">Register</q-btn>
      </div>
    </div>
  </screen>
</template>

<script>
import { QBtn, Toast } from 'quasar'
import Screen from 'src/components/Screen'
import QForm from 'src/components/form/QForm'
import { login } from 'src/authentication'

export default {
  name: 'login',
  components: {
    QBtn,
    QForm,
    Screen
  },
  data () {
    return {
      schema: {
        email: {
          name: 'email',
          type: 'email',
          model: '',
          label: 'Email',
          icon: 'email',
          helper: 'Type your email',
          errorLabel: 'Please, type a valid email',
          validators: {
            email: {
              type: 'email'
            }
          }
        },
        password: {
          name: 'password',
          type: 'password',
          model: '',
          label: 'Password',
          icon: 'lock',
          helper: 'Type your password',
          errorLabel: 'Please, type a valid password',
          count: 16,
          validators: {
            minLength: {
              type: 'minLength',
              min: 8
            },
            maxLength: {
              type: 'maxLength',
              min: 16
            }
          }
        }
      }
    }
  },
  methods: {
    submit (data) {
      login(data.email, data.password)
      .catch(_ => {
        Toast.create.negative('Cannot login. Please check your credentials and try again.')
      })
    }
  }
}
</script>

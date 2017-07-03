<template>
  <k-screen title="Log In" :isClosable="false">
    <div slot="frame-content" class="column justify-center">
      <!-- 
        Login form 
       -->
      <k-form :schema="schema" submitButton="Log In" @submitted="onSubmitted" />
      <!-- 
        Register link 
      -->
      <a class="self-center text-primary" @click="$router.push('ResetPassword')">
        Forgot your password ?
      </a>
    </div>
    <!--
      Register link
    -->
    <div slot="frame-footer" class="row justify-center">
      <small>
        <a class="text-tertiary" @click="$router.push('Register')">
          Don't have an account ?
        </a>
      </small>
    </div>
  </k-screen>
</template>

<script>
import { QList, QItem, QItemMain, QBtn } from 'quasar'
import KScreen from 'src/components/KScreen'
import KForm from 'src/components/form/KForm'
import { login } from 'src/authentication'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  components: {
    QList,
    QItem,
    QItemMain,
    QBtn,
    KForm,
    KScreen
  },
  // TODO: define a library of fields to be included within a schema
  data () {
    return {
      schema: {
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
        }
      }
    }
  },
  methods: {
    onSubmitted (data) {
      login(data.email, data.password)
    }
  }
}
</script>

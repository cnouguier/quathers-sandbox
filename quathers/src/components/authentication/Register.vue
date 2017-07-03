<template>
  <k-screen title="Register" :isClosable="false">
    <!--
      Register form
    -->
    <div slot="frame-content" class="column justify-center">
      <k-form :schema="schema" submitButton="Register" @submitted="onSubmitted" />
    </div>
    <!--
      Log In link
    -->
    <div slot="frame-footer" class="row justify-center">
      <small>
        <a class="text-dark" @click="$router.push('Login')">
          Already have an account ?
        </a>
      </small>
    </div>
  </k-screen>
</template>

<script>
import KForm from 'src/components/form/KForm'
import KScreen from 'src/components/KScreen'
import { register } from 'src/authentication'
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'register',
  components: {
    KForm,
    KScreen
  },
  data () {
    return {
      schema: {
        firstName: {
          type: 'text',
          model: '',
          label: 'First name',
          helper: 'Type your first name',
          errorLabel: 'Please, type a valid first name',
          validators: {
            minLength: minLength(3),
            maxLength: maxLength(24),
            required
          }
        },
        lastName: {
          type: 'text',
          model: '',
          label: 'Last name',
          helper: 'Type your Last name',
          errorLabel: 'Please, type a valid last name',
          validators: {
            minLength: minLength(3),
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
            sameAs: sameAs(_ => this.schema.password.model)
          }
        }
      }
    }
  },
  methods: {
    onSubmitted (data) {
      register(data)
    }
  }
}
</script>

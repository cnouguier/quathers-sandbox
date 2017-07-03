<template>
  <k-screen title="Change Password" :isClosable="false">
   <div slot="frame-content" class="column justify-center">
      <!-- 
        Change Password form 
       -->
      <k-form :schema="schema" submitButton="Submit" @submitted="onSubmitted" />
    </div>
  </k-screen>
</template>

<script>
import KForm from 'src/components/form/KForm'
import KScreen from 'src/components/KScreen'
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'register',
  components: {
    KScreen,
    KForm
  },
  data () {
    return {
      schema: {
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
            sameAs: sameAs('schema.password.model')
          }
        }
      }
    }
  },
  methods: {
    onSubmitted () {
      console.log('TODO')
    }
  }
}
</script>

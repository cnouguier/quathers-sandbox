<template>
  <k-screen title="Reset Password" :isClosable="true" @closed="$router.push('Login')">
   <div slot="frame-content" class="column justify-center">
      <div>
        We'll send you password reset instructions to the email address below.
      </div>
      <k-form :schema="schema" submitButton="Submit" @submitted="onSubmitted" />
    </div>
  </k-screen>
</template>

<script>
import KForm from 'src/components/form/KForm'
import KScreen from 'src/components/KScreen'
import {required, email} from 'vuelidate/lib/validators'

export default {
  name: 'reset-password',
  components: {
    KScreen,
    KForm
  },
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
        }
      }
    }
  },
  methods: {
    onSubmitted (data) {
      console.log(data)
    }
  }
}
</script>

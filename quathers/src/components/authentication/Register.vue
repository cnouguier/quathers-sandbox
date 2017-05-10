<template>
</template>

<script>
import { Dialog } from 'quasar'
import AuthenticationMixin from 'src/mixins/authentication'

export default {
  data () {
    return {
    }
  },
  mixins: [ AuthenticationMixin ],
  mounted () {
    Dialog.create({
      title: 'Register',
      form: {
        firstName: {
          type: 'textbox',
          label: 'First Name',
          model: ''
        },
        lastName: {
          type: 'textbox',
          label: 'Last Name',
          model: ''
        },
        email: {
          type: 'textbox',
          label: 'E-mail',
          model: ''
        },
        password: {
          type: 'password',
          label: 'Password',
          model: ''
        },
        confirmPassword: {
          type: 'password',
          label: 'Confirm Password',
          model: ''
        }
      },
      buttons: [
        {
          label: 'Ok',
          handler: (data) => {
            this.register(data)
          }
        }
      ]
    })
  }
}
</script>

<style>
</style>

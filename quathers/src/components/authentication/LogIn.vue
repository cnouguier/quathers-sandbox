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
      title: 'Log In',
      form: {
        email: {
          type: 'textbox',
          label: 'E-mail',
          model: ''
        },
        password: {
          type: 'password',
          label: 'Password',
          model: ''
        }
      },
      buttons: [
        {
          label: 'Ok',
          handler: (data) => {
            this.login(data.email, data.password)
          }
        }
      ]
    })
  }
}
</script>

<style>
</style>

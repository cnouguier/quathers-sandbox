<template>
  <div class="column justify-center items-center bg-grey-5 window-height window-width">
    <q-card style="width:500px">
      <q-card-title class="bg-light" style="padding:18px">
        <div class="column">
          <div class="self-end">
            <q-btn icon="close" color="primary" flat round small @click="close" />
          </div>
          <div>
            <slot name="header">
              <h5>{{title}}</h5>
            </slot>
          </div>
        </div>
      </q-card-title>
      <q-card-main class="bg-light" style="padding:18px">
        <div class="column">
          <div>
            <slot name="form"></slot>
          </div>
          <div class="self-center" style="padding:18px">
            <q-btn color="primary" bif v-bind:class="{'disabled': invalid}" @click="submit">{{ action }}</q-btn>
          </div>
          <div>
            <slot name="footer"></slot>
          </div>
        </div>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
import { QCard, QCardTitle, QCardMain, QBtn } from 'quasar'

export default {
  name: 'screen',
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QBtn
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: 'Submit'
    },
    invalid: {
      type: Boolean
    }
  },
  data () {
    return {}
  },
  methods: {
    close () {
      this.$emit('closed')
    },
    submit () {
      if (!this.invalid) {
        this.$emit('submitted')
      }
    }
  }
}
</script>

<style>
</style>

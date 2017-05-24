<template>
  <div class="column justify-center items-center bg-grey-5 window-height window-width">
    <div>
      <div class="card shadow-4" style="width:400px">
        <div class="card-title bg-white" style="padding:18px">
          <div class="column">
            <div class="self-end">
              <button class="primary clear circular small" @click="close()">
                <i>close</i>
              </button>
            </div>
            <div>
              <slot name="header">
                <h5>{{title}}</h5>
              </slot>
            </div>
          </div>
        </div>
        <div class="card-content bg-white" style="padding:18px">
          <div class="column">
            <div>
              <slot></slot>
            </div>
            <div class="self-center" style="padding:18px">
              <button class="primary big" v-bind:class="{'disabled': invalid}" @click="submit">{{action}}</button>
            </div>
            <div>
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'screen',
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

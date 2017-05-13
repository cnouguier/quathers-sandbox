<template>
  <div class="column justify-center items-center bg-grey-5">
    <div>
      <div class="card shadow-4" style="width:500px">
        <div class="card-title bg-white" style="padding:25px">
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
        <div class="card-content bg-white" style="padding:30px">
          <div class="column">
            <div>
              <slot></slot>
            </div>
            <div class="self-center" style="padding:25px">
              <button class="primary outline big" v-bind:disabled="! canSubmit" @click="submit()">{{action}}</button>
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
    }
  },
  data () {
    return {
      canSubmit: true
    }
  },
  methods: {
    close () {
      this.$emit('closed')
    },
    submit () {
      this.$emit('submitted')
    }
  }
}
</script>

<style>
</style>

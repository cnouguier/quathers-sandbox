<template>
  <div class="row justify-center items-center window-height window-width" v-bind:class="backgroundColor">
    <div class="col-xs-10 col-sm-9 col-md-7 col-bg-5 col-lg-4 col-xl-4">
      <!--
        Header section
      -->
      <slot name="frame-header" />
      <!--
        Frame section
      -->
      <q-card :class="frameColor">
        <!-- Title section -->
        <q-card-title>
          <slot name="frame-title">
            <div class="row justify-between">
              <div>
                <h5>{{title}}</h5>
              </div>
              <div v-if="isClosable">
                <q-btn icon="close" color="primary" flat round small @click="$emit('closed')" />
              </div>
            </div>
          </slot>
        </q-card-title>
         <!-- Content section -->
        <q-card-main>
          <slot name="frame-content" />
        </q-card-main>
      </q-card>
      <!-- 
        Footer section
      -->
      <slot name="frame-footer" />
    </div>
  </div>
</template>

<script>
import { QCard, QCardTitle, QCardMain, QBtn } from 'quasar'

export default {
  name: 'k-screen',
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
    isClosable: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: 'bg-grey-5'
    },
    frameColor: {
      type: String,
      default: 'bg-light'
    }
  },
  data () {
    return {}
  }
}
</script>

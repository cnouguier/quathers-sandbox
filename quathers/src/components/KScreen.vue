<template>
  <div class="row justify-center items-center window-height window-width" :class="backgroundColor">
    <div class="col-xs-10 col-sm-8 col-md-6 col-bg-5 col-lg-4 col-xl-4">
      <!--
        Header section
      -->
      <slot name="frame-header" />
      <!--
        Frame section
      -->
      <q-card :class="frameColor">
        <!-- 
          Title section 
        -->
        <q-card-title>
          <slot name="title">
            <h5>{{title}}</h5>
          </slot>
          <div slot="subtitle">
            {{subtitle}}
          </div>
          <div slot="right">
            <q-btn v-if="isClosable" icon="close" color="primary" flat round small @click="$emit('closed')" />
          </div>
        </q-card-title>
        <!-- 
          Content section 
        -->
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
    subtitle: {
      type: String,
      default: ''
    },
    isClosable: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: 'bg-grey-4'
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

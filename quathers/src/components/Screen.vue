<template>
  <div class="row justify-center items-center window-height window-width" v-bind:class="backgroundColor">
    <div class="col-xs-12 col-sm-10 col-md-9 col-bg-8 col-lg-7 col-xl-5">
      <!--
        Header section
      -->
      <slot name="header" />
      <!--
        Frame section
      -->
      <q-card>
        <!-- Title section -->
        <q-card-title :class="frameColor">
          <div class="row justify-between">
            <div>
              <h5>{{title}}</h5>
            </div>
            <div v-if="isClosable">
              <q-btn icon="close" color="primary" flat round small @click="$emit('closed')" />
            </div>
          </div>
        </q-card-title>
         <!-- Content section -->
        <q-card-main :class="frameColor">
          <slot name="content" />
        </q-card-main>
      </q-card>
      <!-- 
        Footer section
      -->
      <slot name="footer" />
    </div>
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

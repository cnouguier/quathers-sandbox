<template>
  <q-card>
    <!--
      Title section
    -->
    <q-card-title class="bg-light">
      <slot name="title">
        {{ item.name }}
      </slot>
    </q-card-title>
    <!--
      Content section
    -->
    <q-card-main class="bg-light">
      <slot name="content">
        {{ item.description }}
      </slot>
    </q-card-main>
    <!--
      Actions section
    -->
    <q-card-separator />
    <q-card-actions>
      <template v-for="action in actions">   
        <q-btn flat color="primary" :icon="action.icon" @click="$emit('actionTrigerred', action.handler, item)">
          <small>{{ action.label }}</small>
        </q-btn>
      </template>
    </q-card-actions>
  </q-card>
</template>

<script>
import { QCard, QCardTitle, QCardActions, QCardSeparator, QCardMain, QBtn } from 'quasar'

export default {
  name: 'card-item',
  components: {
    QCard,
    QCardTitle,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QBtn
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    actions: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

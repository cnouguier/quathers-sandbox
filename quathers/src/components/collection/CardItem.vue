<template>
  <div style="margin: 18px">
    <div class="card">
      <div class="card-title bg-light">
        <div class="row start-justify items-center">
          <!--
            Icon section
          -->
          <div>
            <slot name="icon">
            </slot>
          </div>
          <!--
            Title section
          -->
          <div>
            <slot name="title">
              <span style="padding: 18px"> {{ item.name }} </span>
            </slot>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="column justify-center">
          <!--
            Content section
          -->
          <div>
            <slot name="content">
              {{ item.description }}
            </slot>
          </div>
          <!--
            Actions section
          -->
          <div>
            <slot name="actions">
              <div class="row justify-end">
                <div v-for="action in actions">
                  <button class="primary clear" @click="$emit('actionTrigerred', action.handler, item)">
                    <i>{{ action.icon }}</i>
                    {{ action.label }}
                  </button>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-item',
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

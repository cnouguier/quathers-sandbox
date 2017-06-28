<template>
  <div class="column">
    <template v-for="field in schema">
      <q-field
        :icon="field.icon"
        :label="field.label"
        :label-width="3"
        :helper="field.helper"
        :error="hasError(field)"
        :error-label="field.errorLabel"
        :count="field.count"
      >

        <q-input
          v-if="__isInputType(field.type)"
          :type="field.type"
          v-model="field.model"
          @input="touchValidator(field)" />

        <q-chips-input
          v-else-if="field.type === 'chips'"
          v-model="field.model"
          :color="field.color"
          :float-label="field.label" />

        <q-option-group
          v-else-if="['radio', 'checkbox', 'toggle'].includes(field.type)"
          :type="field.type"
          v-model="field.model"
          :color="field.color"
          :options="field.items" />

        <div v-if="field.type === 'slider' || field.type === 'range'" style="margin-top: 15px; margin-bottom: 10px">
          <label v-html="field.label + ' (' + (field.type === 'range' ? field.modfield.min + ' to ' + field.modfield.max : field.model) + ')'"></label>
          <component
            :is="'q-' + field.type"
            v-model="field.model"
            :min="field.min"
            :max="field.max"
            :step="field.step"
            :label="field.withLabel"
            :label-always="field.labelAlways"
            :markers="field.markers"
            :snap="field.snap"
            :square="field.square"
            :color="field.color"
            class="with-padding"
          ></component>
        </div>

        <div v-if="field.type === 'rating'" style="margin-bottom: 10px">
          <label class="block" v-html="field.label"></label>
          <q-rating v-model="field.model" :max="field.max" :icon="field.icon" :style="{fontSize: field.size || '2rem'}" :color="field.color"></q-rating>
        </div>
        
      </q-field>
    </template>

    <div class="row justify-center" style="padding: 18px">
      <q-btn color="primary" @click="submit">{{ submitButtonLabel }}</q-btn>
    </div>

  </div>
</template>

<script>
import { QField, QInput, QChipsInput, QOptionGroup, QSlider, QRange, QRating, QBtn } from 'quasar'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'q-form',
  components: {
    QField,
    QInput,
    QChipsInput,
    QOptionGroup,
    QSlider,
    QRange,
    QRating,
    QBtn
  },
  props: {
    schema: {
      type: Object,
      required: true
    },
    submitButtonLabel: {
      type: String,
      default: 'Submit'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    __isInputType (type) {
      let inputTypes = [ 'text', 'textarea', 'email', 'tel', 'file', 'number', 'password', 'url' ]
      return inputTypes.includes(type)
    },
    hasError (field) {
      // console.log('hasError: ' + field.name + ' ' + this.$v[field.name].$error)
      return this.$v.schema[field.name].$error
    },
    touchValidator (field) {
      // console.log('touchValidator: ' + field.name)
      this.$v.schema[field.name].$touch()
    },
    submit () {
      let data = {}
      Object.keys(this.schema).forEach(name => {
        const el = this.schema[name]
        data[name] = el.model
      })
      this.$emit('submitted', data)
    },
    cancel () {
      this.$emit('canceled')
    }
  },
  mixins: [ validationMixin ],
  validations: {
    schema: {
      email: {
        email,
        required
      },
      password: {
        minLength: minLength(8),
        maxLength: maxLength(16)
      }
    }
  }
}
</script>

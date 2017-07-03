<template>
  <div class="column">
    <template v-for="field in schema">
      <q-field
        :icon="field.icon"
        :label="field.label"
        :label-width="3"
        :helper="field.helper"
        :error="$v.schema[field.key].model.$error"
        :error-label="field.errorLabel"
        :count="field.count"
      >

        <q-input
          v-if="__isInputType(field.type)"
          :type="field.type"
          v-model="schema[field.key].model"
          @blur="$v.schema[field.key].model.$touch()" />

        <q-chips-input
          v-else-if="field.type === 'chips'"
          v-model="field.model"
          :color="field.color" />

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

    <div class="row justify-around" style="padding: 18px">
      <q-btn v-if="cancelButton !== ''" color="primary" @click="cancel">{{ cancelButton }}</q-btn>
      <q-btn color="primary" @click="submit">{{ submitButton }}</q-btn>
    </div>

  </div>
</template>

<script>
import { QField, QInput, QChipsInput, QOptionGroup, QSlider, QRange, QRating, QBtn } from 'quasar'
import { validationMixin } from 'vuelidate'

export default {
  name: 'k-form',
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
    submitButton: {
      type: String,
      default: 'Submit'
    },
    cancelButton: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  validations () {
    var validator = { schema: {} }
    Object.entries(this.schema).forEach(field => {
      // Add the 'key' property storing schema key to access this field
      this.schema[field[0]].key = field[0]
      // Add the 'model' property
      validator.schema[field[0]] = { model: {} }
      // If any add the 'validators' assigned to this model
      if (field[1].validators) {
        validator.schema[field[0]].model = field[1].validators
      }
    })
    return validator
  },
  methods: {
    // TODO: can we get it from Quasar ?
    __isInputType (type) {
      let inputTypes = [ 'text', 'textarea', 'email', 'tel', 'file', 'number', 'password', 'url' ]
      return inputTypes.includes(type)
    },
    submit () {
      this.$v.schema.$touch()
      if (this.$v.schema.$error === false) {
        let data = {}
        Object.keys(this.schema).forEach(name => {
          const el = this.schema[name]
          data[name] = el.model
        })
        this.$emit('submitted', data)
      }
    },
    cancel () {
      this.$emit('canceled')
    }
  },
  mixins: [validationMixin]
}
</script>

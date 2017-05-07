<template>
  <div class="layout-padding">
    <q-slider arrows dots fullscreen autoplay infinite class="text-white">
      <div slot="slide" class="bg-primary centered">
        Slide 1
      </div>
      <div slot="slide" class="bg-secondary centered">
        Slide 2
      </div>
      <div slot="slide" class="bg-tertiary centered">
        Slide 3
      </div>
    </q-slider>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>

<template>

    <div class="timeline">
      <!-- label -->
      <div class="timeline-label">
        <h4 class="bg-white text-primary">
          My events
        </h4>
      </div>
      <div class="timeline-item">
        <!-- badge -->
        <div class="timeline-badge">
          <i>alarm</i>
        </div>
        <!-- title -->
        <div class="timeline-title">
          Event 1
        </div>
        <!-- date timestamp -->
        <div class="timeline-date text-italic">
          <div>hour</div>
          <div>date</div>
        </div>
        <!--
          content; any Web component or DOM elements,
          in this particular case, a Card
        -->
        <div class="card">
          <div class="card-title bg-tertiary text-white">
            Card Title
          </div>
          <div class="card-content">
            Card content
          </div>
        </div>
      </div>
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

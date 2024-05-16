<script setup lang="ts">
defineProps(['description'])
</script>

<template>
  <div class="page about_widget">
    <div
      class="text"
      v-html="description"
    />
  </div>
</template>

<style scoped>

</style>

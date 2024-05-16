<script setup lang="ts">
defineProps(['link', 'title', 'description'])
</script>

<template>
  <div class="page text-pad-left about_widget">
    <NuxtLink :to="link">
      <h2>
        {{ title }}
      </h2>
    </NuxtLink>
    <div
      class="text"
      v-html="description"
    />
  </div>
</template>

<style scoped>

</style>

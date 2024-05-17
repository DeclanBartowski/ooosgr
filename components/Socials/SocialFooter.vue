<script setup lang="ts">
defineProps(['socials']);
</script>

<template>
  <div class="social_icons">

    <a
      v-for="social in socials"
      :key="social.icon"
      :class="social.icon"
      :href="social.href"
      target="_blank"
      rel="nofollow"
      :title="social.title"></a>
  </div>
</template>

<style scoped>

</style>

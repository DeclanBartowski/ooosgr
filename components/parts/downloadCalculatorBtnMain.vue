<script setup lang="ts">
defineProps(['link'])
</script>

<template>
  <NuxtLink class="download icon-pdf"
     :to="link" external><span class="pdf-span">Скачать прайс-лист</span>
  </NuxtLink>
</template>

<style scoped>

</style>

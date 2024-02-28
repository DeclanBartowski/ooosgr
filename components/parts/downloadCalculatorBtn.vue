<script setup lang="ts">
defineProps(['link'])
</script>

<template>
  <NuxtLink class="icon-pdf--right left_align download_pdf"
     :to="link"><span>Скачать прайс-лист</span>
  </NuxtLink>
</template>

<style scoped>

</style>

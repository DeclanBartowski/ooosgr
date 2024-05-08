<script setup lang="ts">
import type { LinkText } from '~/types/root'

defineProps<{
  className: string,
  data: LinkText
}>()
</script>

<template>
  <div class="info_link" :class="className">
    <NuxtLink :to="data.link"><span>В наличии:</span>{{ data.text }}</NuxtLink>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import type { BusBanner } from '~/types/bus'

defineProps<{
  data: BusBanner[]
}>()

const config = useRuntimeConfig()
</script>

<template>
  <img
    v-for="banner in data"
    :key="banner.style"
    :alt="banner.picture.alt"
    :src="`${config.public.baseURL}${banner.picture.src}`"
    :style="banner.style"
  >
</template>

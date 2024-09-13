<script setup lang="ts">
import type { AboutBanner } from '~/types/about'

defineProps<{
  banner: AboutBanner
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="parallax_cont block-shadow about_cont">
    <div class="parallax">
      <img
        :alt="banner.preview.alt"
        :src="`${config.public.baseURL}${banner.preview.src}`"
        style="width: 1260px; height: 1000px;"
      >
    </div>

    <div class="text">
      <h1 class="white">
        {{ banner.title }}
      </h1>
      <img
        :alt="banner.detail.alt"
        :src="`${config.public.baseURL}${banner.detail.src}`"
        style="width: 1097px; height: 240px;"
      >
    </div>
  </div>
</template>

<style scoped></style>

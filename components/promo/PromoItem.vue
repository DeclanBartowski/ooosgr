<script setup lang="ts">
import type { NamePictureText } from '~/types/root'

defineProps<{
  data: NamePictureText
}>()

const config = useRuntimeConfig()
</script>

<template>
  <li>
    <div
      class="img"
      style="height: 125px;"
    >
      <img
        :alt="data.picture.alt"
        :src="`${config.public.baseURL}${data.picture.src}`"
      >
    </div>
    <div class="desc">
      <h2>{{ data.name }}</h2>
      <div class="text">
        <p>{{ data.text }}</p>
      </div>
    </div>
  </li>
</template>

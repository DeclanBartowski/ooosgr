<script setup lang="ts">
import type { NamePictureText } from '~/types/root'

defineProps<{
  data: NamePictureText[]
}>()
</script>

<template>
  <ul class="articles_list _news">
    <PromoItem
      v-for="d in data"
      :key="d.name"
      :data="d"
    />
  </ul>
</template>

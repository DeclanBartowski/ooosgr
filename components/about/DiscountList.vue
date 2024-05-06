<script setup lang="ts">
import type { AboutDiscount } from '~/types/about'

defineProps<{
  discount: AboutDiscount
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="column">
    <h2
      class="big"
      v-html="discount.title"
    />
    <div
      v-for="item in discount.items"
      :key="item.text"
      class="clearfix"
      style="margin-bottom: 0px;"
    >
      <img
        :alt="item.img.alt"
        class="float_left"
        :src="`${config.public.baseURL}${item.img.src}`"
      >
      <span v-html="item.text" />
    </div>
  </div>
</template>

<style scoped>

</style>

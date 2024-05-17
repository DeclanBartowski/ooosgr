<script setup lang="ts">
let props = defineProps(['slides']);
const config = useRuntimeConfig()

</script>

<template>
  <div class="gallery slider big">
    <template v-if="slides.length>0">
      <NuxtLink class="photo_thumb fancybox"
         :to="`${config.public.baseURL}${slides[0].src}`"
         :rel="slides[0].alt"
         :title="slides[0].alt">
        <img alt="" :src="`${config.public.baseURL}${slides[0].src}`">
      </NuxtLink>
      <div class="hide">
        <NuxtLink v-for="(slide, index) in slides.slice(1)"
           :key="index"
           class="photo_thumb fancybox"
           :to="`${config.public.baseURL}${slide.src}`"
           :rel="slide.alt"
           :title="slide.alt">
          <img alt=""  :src="`${config.public.baseURL}${slide.src}`">
        </NuxtLink>
      </div>
    </template>
    <template v-else>
      <img :alt="slides[0].alt" :src="`${config.public.baseURL}${slides[0].src}`">
    </template>
  </div>
</template>

<style scoped>

</style>

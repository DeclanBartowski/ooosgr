<script setup lang="ts">
let props = defineProps(['slides']);
</script>

<template>
  <div class="gallery slider big">
    <template v-if="slides.length>1">
      <NuxtLink class="photo_thumb fancybox"
         :to="slides[0].big"
         :rel="slides[0].rel"
         :title="slides[0].title">
        <img alt="" :src="slides[0].small">
      </NuxtLink>
      <div class="hide">
        <NuxtLink v-for="(slide, index) in slides.slice(1)"
           :key="index"
           class="photo_thumb fancybox"
           :to="slide.big"
           :rel="slide.rel"
           :title="slide.title">
          <img alt="" :src="slide.small">
        </NuxtLink>
      </div>
    </template>
    <template v-else>
      <img :alt="slides[0].title" :src="slides[0].big">
    </template>
  </div>
</template>

<style scoped>

</style>

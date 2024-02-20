<script setup lang="ts">
let props = defineProps(['slides']);
</script>

<template>
  <div class="gallery slider big">
    <template v-if="slides.length>1">
      <a class="photo_thumb fancybox"
         :href="slides[0].big"
         :rel="slides[0].rel"
         :title="slides[0].title">
        <img alt="" :src="slides[0].small">
      </a>
      <div class="hide">
        <a v-for="(slide, index) in slides.slice(1)"
           :key="index"
           class="photo_thumb fancybox"
           :href="slide.big"
           :rel="slide.rel"
           :title="slide.title">
          <img alt="" :src="slide.small">
        </a>
      </div>
    </template>
    <template v-else>
      <img :alt="slides[0].title" :src="slides[0].big">
    </template>
  </div>
</template>

<style scoped>

</style>

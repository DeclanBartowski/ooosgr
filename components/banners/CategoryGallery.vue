<script setup lang="ts">
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";

let props = defineProps(['slides']);
const config = useRuntimeConfig()

</script>

<template>
  <div class="gallery slider big">
    <template v-if="slides.length>0">
        <FancyboxComponent
            :options="{
                defaultType:'image'
              }"
        >
          <a v-for="(slide, index) in slides"
                    :key="index"
                    :style="{display: (index == 0) ? 'block' : 'none'}"
                    class="photo_thumb fancybox"
                    :href="`${config.public.baseURL}${slide.original_resize}`"
                    :rel="slide.alt"
                    :title="slide.alt"
                    data-fancybox="gallery"
          >
            <img alt=""  :src="`${config.public.baseURL}${slide.resize.src}`">
          </a>
        </FancyboxComponent>

    </template>
    <template v-else>
      <img :alt="slides[0].alt" :src="`${config.public.baseURL}${slides[0].src}`">
    </template>
  </div>
</template>

<style scoped>

</style>

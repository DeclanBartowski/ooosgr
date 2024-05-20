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
        <a class="photo_thumb fancybox"
          :href="`${config.public.baseURL}${slides[0].src}`"
          :rel="slides[0].alt"
          :title="slides[0].alt"
           data-fancybox
        >

          <img alt="" :src="`${config.public.baseURL}${slides[0].src}`">
        </a>

      </FancyboxComponent>

      <div class="hide">
        <FancyboxComponent
            :options="{
                defaultType:'image'
              }"
        >
          <a v-for="(slide, index) in slides.slice(1)"
                    :key="index"
                    class="photo_thumb fancybox"
                    :href="`${config.public.baseURL}${slide.src}`"
                    :rel="slide.alt"
                    :title="slide.alt"
                    data-fancybox
          >
            <img alt=""  :src="`${config.public.baseURL}${slide.src}`">
          </a>

        </FancyboxComponent>

      </div>
    </template>
    <template v-else>
      <img :alt="slides[0].alt" :src="`${config.public.baseURL}${slides[0].src}`">
    </template>
  </div>
</template>

<style scoped>

</style>

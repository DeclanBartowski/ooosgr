<script setup lang="ts">
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css'
  defineProps(['items'])
  const config = useRuntimeConfig()
</script>

<template>
  <div class="main slider">
    <Carousel
      :model="currentSlide"
      :autoplay="4800"
      :itemsToShow="1"
      :wrapAround="true"
    >
      <Slide
        v-for="slide in items"
        :key="slide"
      >
        <div class="slide-wrapper">
          <div class="parallax">
            <img
              alt=""
              :src="`${config.public.baseURL}${slide.previewImg.src}`"
            >
          </div>
          <img
            alt=""
            :src="`${config.public.baseURL}${slide.detailImg.src}`"
          >
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.slide-wrapper {
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: center;
  position: relative;
}
.main.slider .slide-wrapper .parallax {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.main.slider .slide-wrapper>img, .main.slider .slide-wrapper .parallax img {
  display: block;
  position: relative;
  width: 100%;
}
@media only screen and (max-width: 1280px){
  .main.slider, .main.slider ol li, .slide-wrapper {
    height: 30vw;
  }
  .main.slider {
    box-shadow: none;
    margin: 0 0 30px 0;
    overflow: visible
  }
}
</style>

<script setup lang="ts">
const slides = ref([
  {
    slide: 'https://ooosgr.ru/cache/slide/files/slide/203133d1c30f5744b56a9bb9853f71807b96f4f88.jpeg',
    slideText: 'https://ooosgr.ru/cache/slide_text/files/slide/23a907fef0fe655eb62de13a141aa04020566cc86.png'
  },
  {
    slide: 'https://ooosgr.ru/cache/slide/files/slide/eafc64ab5f2e864c9971a79c427ed22598d4dee3.jpeg',
    slideText: 'https://ooosgr.ru/cache/slide_text/files/slide/4ab81b8629d0458d81a626df365653cc592dab32.png'
  },
  {
    slide: 'https://ooosgr.ru/cache/slide/files/slide/46b4761dce1874adae94b8a0c7851679e3c6118ed.jpeg',
    slideText: 'https://ooosgr.ru/cache/slide_text/files/slide/4ab81b8629d0458d81a626df365653cc592dab32.png'
  },
  {
    slide: 'https://ooosgr.ru/cache/slide/files/slide/46b4761dce1874adae94b8a0c7851679e3c6118ed.jpeg',
    slideText: 'https://ooosgr.ru/cache/slide_text/files/slide/4ab81b8629d0458d81a626df365653cc592dab32.png'
  },
  {
    slide: 'https://ooosgr.ru/cache/slide/files/slide/eafc64ab5f2e864c9971a79c427ed22598d4dee3.jpeg',
    slideText: 'https://ooosgr.ru/cache/slide_text/files/slide/4ab81b8629d0458d81a626df365653cc592dab32.png'
  },
  {
    slide: 'https://ooosgr.ru/cache/slide/files/slide/46b4761dce1874adae94b8a0c7851679e3c6118ed.jpeg',
    slideText: 'https://ooosgr.ru/cache/slide_text/files/slide/4ab81b8629d0458d81a626df365653cc592dab32.png'
  },
]);
</script>

<template>
  <div class="main slider mobile mobile--980p">
    <ul class="owl-carousel js-slider">
      <li v-for="slide in slides">
        <div class="parallax">
          <img v-if="slide.slide" alt="" :src="slide.slide">
        </div>
        <img v-if="slide.slideText" alt="" :src="slide.slideText">
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>

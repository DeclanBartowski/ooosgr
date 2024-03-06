<script setup lang="ts">
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css'
  const data = ref({
    items:[
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/203133d1c30f5744b56a9bb9853f71807b96f4f88.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/23a907fef0fe655eb62de13a141aa04020566cc86.png',
      },
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/eafc64ab5f2e864c9971a79c427ed22598d4dee3.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/c57f4c97bc25d9a26ccca50864c373200f2ebdd9.png',
      },
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/46b4761dce1874adae94b8a0c7851679e3c6118ed.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/4ab81b8629d0458d81a626df365653cc592dab32.png',
      },
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/bf0907bdb874b21ac00e475a90e5b1f26ae5d5b2.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/b8dcf46bac9421d3614b7f3d8e9d62220cf2a3b6.png',
      },
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/92f33b8ca2322ca716a0a4f3f5036c1e173445d0.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/00f9b69b1303a5d4ea2f2348880fa9bc12594234.png',
      },
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/a5d46dff407d1ffb99dff4b2fac430636750b5b2.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/182b0428fa258342de1c6793287d71a028373a5f.png',
      }
    ]
  })
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
        v-for="slide in data.items"
        :key="slide"
      >
        <div class="slide-wrapper">
          <div class="parallax">
            <img
              alt=""
              :src="slide.previewImg"
            >
          </div>
          <img
            alt=""
            :src="slide.detailImg"
          >
        </div>
      </Slide>
      <template #addons>
<!--        <Navigation />-->
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

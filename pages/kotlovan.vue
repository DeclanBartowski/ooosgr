<script setup lang="ts">
import { Carousel, Slide, Navigation} from 'vue3-carousel'
import { Fancybox } from "@fancyapps/ui";
//import 'vue3-carousel/dist/carousel.css'

const carousel = ref(null);
const mobileCarousel = ref(null);

import 'vue3-carousel/dist/carousel.css'
import type { KotlovanDto } from '~/types/kotlovan'
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";

const { data: kotlovan } = await useContentFetch<KotlovanDto>('kotlovan', {
  method: 'GET'
})

useSeoMeta({
  ogTitle: () => kotlovan.value!.data.seo.title,
  title: () => kotlovan.value!.data.seo.title,
  description: () => kotlovan.value!.data.seo.description,
  ogDescription: () => kotlovan.value!.data.seo.description,
  keywords: () => kotlovan.value!.data.seo.keywords
})

const config = useRuntimeConfig()

const isMobileDevice = ref(false);

onMounted(() => {

  isMobileDevice.value = window.innerWidth <= 768;

  window.addEventListener('resize', () => {
    isMobileDevice.value = window.innerWidth <= 768;
  });
});

</script>

<template>
  <div
    v-if="kotlovan"
    class="trench-preview"
  >
    <img
      :src="`${config.public.baseURL}${kotlovan.data.banner.preview_picture.src}`"
      class="trench-preview__img block-shadow"
      :alt="kotlovan.data.banner.preview_picture.alt"
    >
  </div>
  <h2
    v-if="kotlovan"
    class="excavation-block__title"
  >
    {{ kotlovan.data.banner.name }}
  </h2>
  <div class="excavation-block margin-50">
    <div
      v-if="kotlovan"
      class="excavation-block-part"
    >
      <p
        class="desc"
        v-html="kotlovan.data.banner.preview_text"
      />
    </div>
    <div
      v-if="kotlovan"
      class="excavation-block-part"
    >
      <img
        :src="`${config.public.baseURL}${kotlovan.data.banner.detail_picture.src}`"
        :alt="kotlovan.data.banner.detail_picture.alt"
      >
    </div>
  </div>

  <h2
    v-if="kotlovan"
    class="excavation-block__title visible"
  >
    {{ kotlovan.data.text_block.name }}
  </h2>
  <div
    v-if="kotlovan"
    class="excavation-block excavation-block-part-no-reverse margin-80"
  >
    <div class="excavation-block-part">
      <img
        :src="`${config.public.baseURL}${kotlovan.data.text_block.preview_picture.src}`"
        :alt="kotlovan.data.text_block.preview_picture.alt"
      >
    </div>
    <div class="excavation-block-part blue">
      <div class="excavation-block-part-padding">
        <h2 class="excavation-block__title in-block no-visible">
          {{ kotlovan.data.text_block.name }}
        </h2>
        <p
          class="desc"
          v-html="kotlovan.data.text_block.preview_text"
        />
      </div>
    </div>
  </div>

  <h2
    v-if="kotlovan"
    class="excavation-block__title big-margin"
  >
    {{ kotlovan.data.steps.title }}
  </h2>

  <div
    v-if="kotlovan"
    class="stages-block"
  >
    <p
      v-for="item in kotlovan.data.steps.items"
      :key="item.name"
      class="step-description"
    >
      <span class="step-number">
        {{ item.name }}
      </span>
      <span>
        <br>
        &emsp;
        {{ item.text }}
      </span>
    </p>
  </div>
  <div class="feedback-form">
    <BitrixForm />
  </div>
  <h2
    v-if="kotlovan"
    class="excavation-block__title"
  >
    {{ kotlovan.data.spec.title }}
  </h2>
  <div
    v-if="kotlovan"
    class="excavation-block excavation-block-part-no-reverse margin-50"
  >
    <div class="excavation-block-part excavation-block-part-left">
      <p
        class="desc"
        v-html="kotlovan.data.spec.items.first.text"
      />
    </div>
    <div class="excavation-block-part full-width w-57">
      <div class="technique-wrapper">
        <img
          :src="`${config.public.baseURL}${kotlovan.data.spec.items.first.picture.src}`"
          class="technique-wrapper__img"
          :alt="kotlovan.data.spec.items.first.picture.alt"
        >
      </div>
    </div>
  </div>
  <div class="excavation-block excavation-block-part-no-reverse margin-80">
    <div class="excavation-block-part">
      <div class="arrow-icon-wrapper">
        <img
          src="/images/site/arrow.png"
          class="arrow-icon"
          alt="arrow"
        >
      </div>
    </div>
    <div
      v-if="kotlovan"
      class="excavation-block-part no-full excavation-block-part-right"
    >
      <p class="tech-description">
        {{ kotlovan.data.spec.items.second.text }}
      </p>
      <ul class="tech-list">
        <li
          v-for="item in kotlovan.data.spec.items.second.value"
          :key="item.name"
          class="tech-list__item"
        >
          <div class="tech-list_item-block">
            <span class="bold">{{ item.name }}</span> <span>{{ item.measure }}</span> <span class="bold">{{ item.product }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div
    v-if="kotlovan"
    class="title-block"
  >
    <h2 class="excavation-block__title center">
      {{ kotlovan.data.text_block_2.name }}
    </h2>
  </div>
  <div
    v-if="kotlovan"
    class="tech-cards-block"
  >
    <div
      v-for="item in kotlovan.data.techniq"
      :key="item.name"
      class="tech-card"
    >
      <img
        :src="`${config.public.baseURL}${item.picture.src}`"
        :alt="item.picture.alt"
      >
      <p>{{ item.name }}</p>
    </div>
  </div>
  <h2
    v-if="kotlovan"
    class="excavation-block__title big-margin"
  >
    {{ kotlovan.data.factors.title }}
  </h2>

  <div
    v-if="kotlovan"
    class="stages-block"
  >
    <p
      v-for="item in kotlovan.data.factors.items"
      :key="item.name"
      class="step-description"
    >
      <span class="step-number">
        {{ item.name }}
      </span>
      <span>
        <br>
        &emsp;
        {{ item.text }}
      </span>
    </p>
  </div>
  <div
    v-if="kotlovan"
    class="advantages-block"
  >
    <h2 class="advantages-block__title big-margin white">
      {{ kotlovan.data.adv.title }}
    </h2>
    <ul class="advantages-block__list">
      <li
        v-for="item in kotlovan.data.adv.items"
        :key="item.name"
        class="advantages-block__list-item"
      >
        <p>
          {{ item.name }}
        </p>
      </li>
    </ul>
  </div>
  <h2
    v-if="kotlovan?.data?.case?.items"
    class="excavation-block__title big-margin margin-80"
  >
    {{ kotlovan.data.case?.title || 'Примеры работ' }}
  </h2>
  <Carousel
    v-if="kotlovan?.data?.case?.items"
    ref="carousel"
    class="full-carousel"
    :wrap-around="true"
    :items-to-show="3"
  >
    <Slide
      v-for="slide in kotlovan.data.case.items"
      :key="slide"
    >
      <div class="carousel__item">
        <FancyboxComponent
          :options="{
            defaultType:'image'
          }"
        >
          <a
            :href="`${config.public.baseURL}${slide?.image?.src}`"
            data-fancybox="gallery"
            data-caption=""
          >
            <img
              :src="`${config.public.baseURL}${slide?.image?.src}`"
              alt=""
            >
          </a>
        </FancyboxComponent>
      </div>
      <div class="slider-blur" />
    </Slide>

    <template #addons>
      <navigation>
        <template #next>
          <span class="slider-next-icon">
            <img
              src="/images/slider/next-btn.png"
              alt="next"
            >
          </span>
        </template>
        <template #prev>
          <img
            class="slider-prev-icon"
            src="/images/slider/prev-btn.png"
            alt="prev"
          >
        </template>
      </navigation>
    </template>
  </Carousel>

  <Carousel
    v-if="kotlovan?.data?.case?.items"
    ref="mobileCarousel"
    class="mobile-carousel"
    :wrap-around="true"
    :items-to-show="2.5"
  >
    <Slide
      v-for="slide in kotlovan.data.case.items"
      :key="slide"
    >
      <div class="carousel__item">
        <a
          :href="`${config.public.baseURL}${slide?.image?.src}`"
          data-fancybox="gallery"
          data-caption=""
        >
          <img
            :src="`${config.public.baseURL}${slide?.image?.src}`"
            alt=""
          >
        </a>
      </div>
    </Slide>
  </Carousel>
  <div class="slider-buttons-mobile">
    <button
      class="slider-btn"
      @click="mobileCarousel.prev()"
    >
      <img
        src="~/assets/images/trench/prev.png"
        alt=""
      >
    </button>
    <button
      class="slider-btn"
      @click="mobileCarousel.next()"
    >
      <img
        src="~/assets/images/trench/next.png"
        alt=""
      >
    </button>
  </div>
  <h2
    v-if="kotlovan?.data?.docs?.items && kotlovan?.data?.docs?.items.length > 0"
    class="excavation-block__title big-margin margin-80"
  >
    {{ kotlovan.data.docs?.title || 'Документы' }}
  </h2>
  <div class="documents">
    <a
      v-for="doc in kotlovan.data.docs.items"
      :href="`${config.public.baseURL}${doc?.file}`"
      rel="noopener noreferrer"
      :target="isMobileDevice ? '_self' : '_blank'"
      class="download icon-pdf-document"
    ><span class="pdf-span">{{ doc.title }}</span></a>
  </div>
  <div class="feedback-form">
    <BitrixForm />
  </div>
  <div style="height: 10vh" />
</template>

<style scoped>
.trench-preview {
  width: 100%;
  max-width: 1260px;

  margin: auto;
}

.trench-preview__img {
  width: 100%;
}

.excavation-block {
  width: 100%;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 100px;
}

.excavation-block-part {
  width: 50%;
}

.excavation-block-part-left {
  width: 43%;
}

.excavation-block-part-right {
  width: 64%;
}

.w-57 {
  width: 57%;
}

.excavation-block-part .in-block {
  width: 100%;
  margin-top: 0;
}

.excavation-block .desc {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: calc(16px + 2 * (100vw / 1920));
  width: 96%;
  line-height: 1.45;
}

.excavation-block-part img {
  width: 100%;
  height: 100%;
}

.margin-50 {
  margin-bottom: 50px;
}

.margin-80 {
  margin-bottom: 80px;
}

.excavation-block-part-padding {
  padding: 35px 40px;
}

.excavation-block-part + .full-width img {
  height: auto;
  width: 100%;
}

.excavation-block__title {
  font-family: 'RoadRadio', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #292B7C;
  line-height: normal;
  text-transform: uppercase;
  width: 90%;
  max-width: 1180px;
  margin: 80px auto 40px;
}

@media(max-width: 576px) {
  .excavation-block__title {
    margin: 100px auto 30px;
  }
}

.visible {
  display: none;
}

.big-margin {
  margin-bottom: 50px;
}

@media(max-width: 1260px) {
  .excavation-block {
    flex-direction: column-reverse;
  }

  .excavation-block .desc {
    margin: auto;
  }

  .excavation-block-part-padding {
    padding: 0;
  }

  .excavation-block  p {
    width: 95%;
  }

  .excavation-block .no-visible {
    display: none;
  }

  .visible {
    display: block;
  }

  .excavation-block-part {
    width: 100%;
  }

  .excavation-block-part + .no-full {
    width: 90%;
    margin: auto;
  }

  .excavation-block-part:nth-child(2) {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .excavation-block-part-no-reverse {
    flex-direction: column;
  }

}

.arrow-icon-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: end;
  align-items: center;
}

.arrow-icon {
  position: absolute;
  right: 10%;
  top: 15%;
  max-width: 70px;
  max-height: 240px;
}

@media (max-width: 1260px) {
  .arrow-icon {
    display: none;
  }
}

@media(max-width: 576px) {
  .excavation-block {
    width: 100%;
    margin: 0 auto 50px;
  }


  .excavation-block .desc {
    font-size: calc(16px + (2 + 2 * 0.5) * ((100vw - 576px) / 1920));
    line-height: normal;
    width: 90%;
    margin: auto;
  }


  .excavation-block p {
    width: 95%;
    margin: auto;
    padding: 0;
  }
}

.excavation-block .blue {
  background-color: #DFE8F1;
}

.technique-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
}

.technique-wrapper__img {
  max-width: 670px;
  max-height: 200px;
  margin-bottom: 35px;
}

@media(max-width: 1260px) {
  .technique-wrapper {
    display: block;
    max-width: 90%;
    max-height: 90%;
    margin: auto;
  }
  .technique-wrapper__img {
    max-width: 100%;
    max-height: 10%;
    margin-bottom: 0;
  }
}

.stages-block {
  width: 95%;
  max-width: 1180px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(auto-fill, min-content);
  grid-template-columns: repeat(auto-fill, minmax(300px, 360px));
  justify-content: space-between;
  grid-row-gap: 60px;
}

@media(max-width: 1200px) {
  .stages-block {
    grid-template-columns: repeat(auto-fill, 400px);
  }
}

@media(max-width: 992px) {
  .stages-block {
    grid-template-columns: repeat(auto-fill, minmax(200px, 600px));
    justify-content: center;
  }
}

.step-number {
  font-family: 'RoadRadio', sans-serif;
  font-weight: 700;
  font-size: calc(36px + (16 + 16 * 0.2) * ((100vw - 392px) / 1920));
  color: #8A8C8B;
  line-height: 52px;
}

.step-description {
  font-family: 'RoadRadio', sans-serif;
  width: 100%;
  font-weight: 700;
  font-size: calc(16px + (2 + 2 * 0.2) * ((100vw - 392px) / 1920));
  display: flex;
  align-content: start;
  height: min-content;
  line-height: 21px;
}

.tech-description {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: calc(16px + (8 + 8 * 0.2) * ((100vw - 392px) / 1920));
  line-height: normal;
  margin-bottom: 65px!important;
}

.tech-list{
  width: 100%;
}

.tech-list__item {
  list-style-type: disc!important;
  margin-left: 30px;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: calc(14px + (4 + 4 * 0.2) * ((100vw - 392px) / 1920));
  line-height: normal;
}

.tech-list_item-block {
  display: grid;
  grid-template-columns: 30% minmax(auto, 20%) minmax(auto, 45%);
  margin-bottom: 18px;
}

.tech-list_item-block .bold {
  font-weight: 600;
}

@media(max-width: 576px) {
  .tech-list_item-block {
    display: flex;
    flex-direction: column;
    /*grid-template-columns: 45% minmax(auto, 10%) minmax(auto, 45%);*/
  }
}

.title-block {
  width: 100%;
  max-width: 1260px;
  background-color: #DFE8F1;
  margin: 0 auto 90px;
  text-align: center;
}

.title-block .excavation-block__title {
  padding: 75px 30px;
  font-size: calc(22px + 4 * (100vw / 1920));
  line-height: 32px;
}

@media(max-width: 576px) {
  .title-block .excavation-block__title {
    padding: 75px 15px;
    font-size: calc(22px + (4 + 4 *0.7) * ((100vw - 1920) / 576));
    line-height: normal;
  }
}

.tech-cards-block {
  width: 85%;
  max-width: 1180px;
  margin: 0 auto 130px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 390px));
  grid-template-rows: repeat(auto-fill, minmax(auto, auto));
  justify-content: space-between;
  grid-row-gap: 90px;
}

@media(max-width: 1200px) {
  .tech-cards-block {
    grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
    justify-content: space-between;
  }
}

@media(max-width: 992px) {
  .tech-cards-block {
    grid-template-columns: repeat(auto-fill, minmax(auto, 450px));
    justify-content: center;
  }
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.tech-card p {
  font-family: 'RoadRadio', sans-serif;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
  line-height: 1.3;
}

@media(max-width: 576px) {
  .tech-card p {
    font-size: 24px;
  }
}

.tech-card img {
  width: 100%;
  max-width: 315px;
  margin-bottom: 20px;
}

.advantages-block {
  margin: 80px auto 0;
  width: 100%;
  max-width: 1260px;
  background:  url(~/assets/images/trench/advantages-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 50px 0 85px;
}

.advantages-block__title {
  font-family: 'RoadRadio', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
  line-height: normal;
  text-transform: uppercase;
  width: 90%;
  margin: 0 auto 40px;
}

.advantages-block__list {
  width: 85%;
  margin: auto;
}

.advantages-block__list-item {
  list-style-type: disc;
  font-family: 'Open Sans', sans-serif;
  font-size: calc(16px + 2 * (100vw / 1920));
  line-height: 1.5;
  font-weight: 400;
  color: #ffffff;
  word-wrap: normal;
  height: min-content;
}

@media(max-width: 576px) {
  .advantages-block__title {
    margin: 0 auto 30px;
    width: 90%;
  }
  .advantages-block {
    margin-top: 100px;
    padding: 30px 0 40px;
  }

  .advantages-block__list-item {
    font-size: calc(16px + (2 + 2 * 0.7) * ((100vw - 576px) / 1920));
  }
}

.carousel__item {
  width: 100%;
  border-radius: 5%;
}

.carousel__item img {
  width: 100%;
  border-radius: 5%;
}

.slider-buttons-full {
  margin-top: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.slider-btn {
  width: 72px;
  height: 72px;
  outline: none;
  border: none;
  border-radius: 50px;
  background-color: #D9D9D9;
  cursor: pointer;
  margin: 0 10px;
}

.mobile-carousel {
  display: none;
}

.full-carousel {
  display: block;
  max-width: 1230px;
  margin: auto;
}

.slider-buttons-mobile {
  display: none;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--visible {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.slider-blur {
  width: 100%;
  height: 100%;
  background: rgba(52, 63, 84, 0.5);
  position: absolute;
  border-radius: 10px;
  transition: 0.5s;
}

.carousel__slide--active .slider-blur {
  width: 100%;
  height: 100%;
  background: rgba(52, 63, 84, 0);
  position: absolute;
  border-radius: 10px;
}

@media(max-width: 576px) {
  .slider-btn {
    width: 36px;
    height: 36px;
  }

  .slider-btn img {
    width: 60%;
  }

   .mobile-carousel {
    display: block;
  }

  .full-carousel {
    display: none;
  }

  .slider-buttons-full {
    display: none;
  }

  .slider-buttons-mobile {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.75);
  }

  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.75);
  }

  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.75);
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
  }
}

.feedback-form {
  margin-top: 80px;
  margin-bottom: 100px;
}

@media(max-width: 576px) {
  .feedback-form {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}

.documents {
  display: flex;
  justify-content: center;
  margin: 75px 0;
}
.documents .icon-pdf-document {
  margin: 0 20px;
}
@media only screen and (max-width: 980px) {
  .documents {
    flex-direction: column;
    padding-left: 50px;
  }
  .documents .icon-pdf-document {
    margin: 20px 0;
  }
}
</style>

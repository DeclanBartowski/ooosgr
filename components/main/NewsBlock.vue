<script setup lang="ts">
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";

defineProps(['title', 'link', 'items','shares'])
const config = useRuntimeConfig()


</script>

<template>
  <div class="column w100">
    <div
      v-if="shares"
      class="current-promo"
      :style="{ backgroundImage: `url(${config.public.baseURL}${shares.preview_picture.src})` }"
    >
      <img
        alt=""
        class="current-promo__tag"
        src="~/assets/images/promo_tag.png"
      >
      <div class="current-promo__inner">
        <h2>{{ shares.name }}</h2>
        <p><strong><span style="font-family: &quot;Open Sans&quot;, Arial, Tahoma, sans-serif; font-size: 14px;">{{ shares.preview_text }}</span></strong></p>
        <div class="communicate">
          <div class="communicate__phone">
            <a href="tel:+74957773646">+7 (495) 777-36-46</a>
            <span>Подробности по телефону</span>
          </div>
          <div class="communicate__recall">
            <FancyboxComponent
              :options="{
                defaultType:'html'
              }"
            >
              <a
                href="#popup-callback"
                class="btn red fancybox_dialog"
                data-fancybox="callback"
              >Заказать звонок</a>
            </FancyboxComponent>
          </div>
        </div>
      </div>
    </div>
    <div class="latest_news latest_news--widget">
      <div class="title">
        <NuxtLink
          :to="link"
          :title="title"
        >
          {{ title }}
        </NuxtLink>
      </div>


      <ul class="articles_list _default">
        <li v-for="item in items">
          <div
            class="img"
            style="height: 116px;"
          >
            <img
              height="64"
              width="64"
              alt=""
              :src="`${config.public.baseURL}${item.img.src}`"
            >
          </div>
          <div class="desc">
            <h2>
              <NuxtLink :to="item.url">
                {{ item.title }}
              </NuxtLink>
            </h2>
            <p>{{ item.text }}</p>
          </div>
          <div class="right_align">
            <NuxtLink
              :to="item.url"
              title="Перейти на страницу статьи"
              class="more"
            >
              читать подробнее
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
 .title{
   font-size: 18px;
   font-weight: bold;
   text-align: left;
   margin-bottom: 10px;
   line-height: 1.4em;
   position: relative;
   z-index: 10;
   font-family: 'RoadRadio',Verdana,sans-serif;
 }
 .latest_news--widget .title a {
   color: #2d2f8e;
 }
 .latest_news ul li .desc h2 {
   min-height: 33px;
 }
</style>

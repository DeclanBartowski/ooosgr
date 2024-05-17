<script setup lang="ts">
defineProps(['title', 'link', 'items'])
const config = useRuntimeConfig()


</script>

<template>
  <div class="column w100">
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
                    height="64" width="64"
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
            <p>{{item.text}}</p>
          </div>
          <div class="right_align">
            <NuxtLink
                :to="item.url"
                title="Перейти на страницу статьи"
                class="more"
            >
              читать подробнее </NuxtLink>
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

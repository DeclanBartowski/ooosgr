<script setup lang="ts">
import {newsMenuList} from "~/utils/newsMenu";
const menu = newsMenuList;
defineProps(['className']);
</script>

<template>
  <div
      class="news__link"
      :class="className"
  >
    <NuxtLink
        v-for="menuItem in menu"
        class="title"
        :to="menuItem.link"
        :title="menuItem.title"
    >
      {{ menuItem.title }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.news__link-about {
  top:0;
  display: flex;
  justify-content: space-around;
}
.news__link-about a {
  text-transform: uppercase;
  font-size: 16px;
  margin-right: 0;
  font-weight: bold;
  text-decoration: none;
  font-family: 'RoadRadio',Verdana,sans-serif;
}
.content .text.white a {
  color: #b90700;
}
@media only screen and (max-width: 980px) {
  .news__link-about{
    margin: 30px 0;
  }
}
</style>

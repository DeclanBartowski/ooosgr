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
        :class="{ 'btn red': className === 'news__link-about' }"
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
  justify-content: start;
}
.news__link-about a {
  text-transform: uppercase;
  font-size: 16px;
  margin-right: 21%;
  font-weight: bold;
  text-decoration: none;
  font-family: 'RoadRadio',Verdana,sans-serif;
}
.btn.red {
  box-shadow: none;
}
.content .text.white a {
  color: white;
}
@media only screen and (max-width: 980px) {
  .news__link-about{
    margin: 30px 0;
  }
  .news__link-about a {
    margin-right: 13%;
  }
}
</style>

<script setup lang="ts">

import { computed } from 'vue';
const props = defineProps(['className', 'menu','currentPath']);

const filteredMenu = computed(() => {
  if (!props.menu) return [];
  return props.menu.filter(menuItem => menuItem && menuItem.url && menuItem.url !== props.currentPath);
});
</script>

<template>
  <div
      v-if="filteredMenu.length"
      class="news__link"
      :class="className"
  >
    <NuxtLink
        v-for="(menuItem, index) in filteredMenu"
        :key="index"
        class="title"
        :class="{ 'btn red': className === 'news__link-about' }"
        :to="menuItem.url"
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
  font-weight: bold;
  text-decoration: none;
  font-family: 'RoadRadio',Verdana,sans-serif;
}
.btn.red {
  box-shadow: none;
}
.content .text.white a {
  color: white;
  min-width: 100px;
  border-radius: 2px;
}
@media only screen and (max-width: 980px) {
  .news__link-about{
    margin: 30px 0;
  }
  .news__link-about a {
    margin-right: 0;
    min-width: 90px!important;
  }
}
@media only screen and (max-width: 1070px) {

}
</style>

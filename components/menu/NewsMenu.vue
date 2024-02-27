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
    <a
        v-for="menuItem in menu"
        class="title"
        :href="menuItem.link"
        :title="menuItem.title"
    >
      {{ menuItem.title }}
    </a>
  </div>
</template>

<style scoped>
.news__link-about {
  top:0;
}
.news__link-about a {
  font-size:30px;
  font-weight:normal;
}
</style>

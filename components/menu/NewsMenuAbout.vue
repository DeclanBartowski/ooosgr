<script setup lang="ts">
const menu = ref([
  {
    title: 'Новости',
    link: '/articles/news/'
  },
  {
    title: 'Видео',
    link: '/articles/video/'
  },
  {
    title: 'Статьи',
    link: '/articles/articles/'
  }
])
</script>

<template>
  <div class="news__link news__link-about">
    <a v-for="menuItem in menu" class="title" :href="menuItem.link" :title="menuItem.title">
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

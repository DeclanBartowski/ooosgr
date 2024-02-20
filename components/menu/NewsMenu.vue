<script setup lang="ts">
const menu = ref([
  {
    title: 'Наши новости',
    link: '/articles/news/'
  },
  {
    title: 'Наше видео',
    link: '/articles/video/'
  }
])
</script>

<template>
  <div class="news__link">
    <a v-for="menuItem in menu" class="title" :href="menuItem.link" :title="menuItem.title">
      {{ menuItem.title }}
    </a>
  </div>
</template>

<style scoped>

</style>

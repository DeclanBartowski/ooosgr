<script setup>
defineProps(['type', 'collection'])
</script>

<template>
  <ul class="articles_list" :class="{ '_news': type === 'news', '_article': type !== 'news' }">
    <ArticlesCategoryItem v-for="article in collection" :key="article.id" :article="article"/>
  </ul>
</template>

<style scoped>

</style>

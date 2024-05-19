<script setup>

defineProps(['articleCollection'])
</script>

<template>
  <ul class="articles_list _default">
      <ArticlesItem v-for="article in articleCollection" :key="article.id" :article="article"/>
  </ul>
</template>

<style scoped>

</style>

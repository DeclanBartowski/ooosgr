<script setup>
import Pagination from "~/components/parts/Pagination.vue";

const page = ref({
  title: 'Все статьи',
})

</script>

<template>
  <div class="wrap content category">
    <div class="wrap_cont">
      <div class="articles__title">
        <h1>{{ page.title }}</h1>
      </div>
      <ArticlesList />
      <Pagination />
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped>

</style>

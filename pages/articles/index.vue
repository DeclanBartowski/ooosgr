<script setup lang="ts">
import Pagination from "~/components/parts/Pagination.vue";

import type { ArticleDto } from '~/types/articles'

const route = useRoute();
const { data: detail } = await useContentFetch<ArticleDto>(`articles`, {
    method: 'GET'
})

useServerSeoMeta({
    ogTitle: () => detail.value!.data.seo.title,
    title: () => detail.value!.data.seo.title,
    description: () => detail.value!.data.seo.description,
    ogDescription: () => detail.value!.data.seo.description,
    keywords: () => detail.value!.data.seo.keywords
})

</script>

<template>
  <div class="wrap content category">
    <div class="wrap_cont">
      <div class="articles__title">
        <h1>{{ detail.data.title }}</h1>
      </div>
      <ArticlesList :article-collection="detail.data.items" />
      <Pagination />
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped>

</style>

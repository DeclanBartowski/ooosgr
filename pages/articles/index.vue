<script setup lang="ts">
import Pagination from "~/components/parts/Pagination.vue";

import type { ArticleDto } from '~/types/articles'

const route = useRoute();
let { data: detail } = await useContentFetch<ArticleDto>(`articles`+(route.query.page ? '?page='+route.query.page : ''), {
    method: 'GET'
})

watch(
    () => route.query.page,
    async () => {
      const {data: res} = await useContentFetch<ArticleDto>(`articles` + (route.query.page ? '?page=' + route.query.page : ''), {
        method: 'GET',
      });
      detail.value = res.value;
    }, {
      deep: true,
      immediate: true,
    }
)


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
      <Pagination
          :current-page="detail?.data?.pagination?.pageCurrent"
          :page-count="detail?.data?.pagination?.pageCount"
          url="/articles?"
      />
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped>

</style>

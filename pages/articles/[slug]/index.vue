<script setup lang="ts">
import Pagination from "~/components/parts/Pagination.vue";
import type { ArticleDto } from '~/types/articles'

const route = useRoute();
const { data: detail } = await useContentFetch<ArticleDto>(`articles/${route.params.slug}`, {
    method: 'GET',
    params: {
      page: route.query.page ?  route.query.page : 1,
    }
});

watch(
    () => route.query.page,
    async () => {
      const {data: res} = await useContentFetch<ArticleDto>(`articles/${route.params.slug}`, {
        method: 'GET',
        params: {
          page:  route.query.page ?  route.query.page : 1,
        }
      });
      detail.value = res.value;
    }, {
      deep: true,
      immediate: true,
    }
)

useSeoMeta({
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
        <NewsMenu v-if="detail.data.menu" :menu="detail.data.menu" :currentPath="$route.path"/>
      </div>
      <ArticlesCategoryList
        :type="$route.params.slug"
        :collection="detail.data.items"
      />
      <Pagination
          :current-page="detail?.data?.pagination?.pageCurrent"
          :page-count="detail?.data?.pagination?.pageCount"
          :url="`/articles/${route.params.slug}?`"
      />
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped>

</style>

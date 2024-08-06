<script setup lang="ts">
import type { ArticleDto } from '~/types/article'
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";
const route = useRoute();
const id = computed(() => route.path.split('/').pop())
const { data: detail } = await useContentFetch<ArticleDto>(`articles/news/${id.value}`, {
    method: 'GET'
})
const config = useRuntimeConfig()

useSeoMeta({
    ogTitle: () => detail.value!.data.seo.title,
    title: () => detail.value!.data.seo.title,
    description: () => detail.value!.data.seo.description,
    ogDescription: () => detail.value!.data.seo.description,
    keywords: () => detail.value!.data.seo.keywords
})
</script>

<template>
  <div class="wrap content article">
    <div class="wrap_cont">
      <div class="text clearfix">
        <div
          v-if="detail.data.detailImg && detail.data.img"
          class="article_image"
        >
          <FancyboxComponent
              :options="{
                defaultType:'image'
              }"
          >
            <a data-fancybox="gallery"
                class="fancybox"
                :href="`${config.public.baseURL}${detail.data.detailImg?.src}`"
            >
              <img
                  :alt="detail.data.title"
                  :src="`${config.public.baseURL}${detail.data.img?.src}`"
              >
            </a>
          </FancyboxComponent>

        </div>

        <h1>{{ detail.data.title }}</h1>

        <div class="brief">
          <span>
            <NuxtLink
              :to="detail.data.back.url"
              :title="detail.data.back.title"
            >
              <b>{{ detail.data.category.name }}</b>
            </NuxtLink>
          </span>
          <span>
            Дата создания: {{ detail.data.create }}
          </span>
        </div>

        <div
          v-if="detail.data.html"
          class="wysiwyg"
          v-html="detail.data.html"
        />
      </div>

      <div class="back-option">
        <NuxtLink
          :to="detail.data.back.url"
          :title="detail.data.back.title"
        >
          {{ detail.data.back.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped>

</style>

<script setup lang="ts">
import type { TrubybuDto } from '~/types/trubybu'

const { data: trubybu } = await useContentFetch<TrubybuDto>('truby-b-u', {
  method: 'GET'
})

const template = ref('')

useSeoMeta({
  ogTitle: () => trubybu.value!.data.seo.title,
  title: () => trubybu.value!.data.seo.title,
  description: () => trubybu.value!.data.seo.description,
  ogDescription: () => trubybu.value!.data.seo.description,
  keywords: () => trubybu.value!.data.seo.keywords
})
</script>

<template>
  <CategorySliderMobile v-if="trubybu.data.slider" :items="trubybu.data.slider" />
  <div class="wrap content page pipe">
    <div class="wrap_cont">
      <div class="two columns columns--adaptive">
        <Sidebar
          v-if="trubybu"
          :data="trubybu?.data"
        />
        <Category
          v-if="trubybu"
          :content="trubybu?.data"
          :category="trubybu?.data.info"
          :template
          :data="trubybu.data"
        />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

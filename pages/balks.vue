<script setup lang="ts">
import type { BalksDto } from '~/types/balks'

const template = ref('balks')

const data = ref({
  slider: [
    {
      big: 'https://ooosgr.ru/upload/%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0.jpg',
      small: 'https://ooosgr.ru/upload/%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0.jpg',
      title: 'Балка',
      rel: 'gallery_5_slider',
    },
  ],
  showMenu: true,
  itemsHead: [
    'Номенклатура',
    'Описание',
    'Цена',
    'Фото'
  ],
})

const { data: balks } = await useContentFetch<BalksDto>('balks', {
  method: 'GET'
})

useSeoMeta({
  ogTitle: () => balks.value!.data.seo.title,
  title: () => balks.value!.data.seo.title,
  description: () => balks.value!.data.seo.description,
  ogDescription: () => balks.value!.data.seo.description,
  keywords: () => balks.value!.data.seo.keywords
})


</script>

<template>
  <div class="wrap content page pipe">
    <div class="wrap_cont">
      <div class="two columns columns--adaptive">
        <Sidebar
          v-if="balks"
          :wrapper-class="'archetype archetype--1280p'"
          :data="balks.data"
        />
        <Category
          v-if="balks"
          :template
          :category="balks.data.info"
          :content="balks.data"
          :data="balks.data"
        />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

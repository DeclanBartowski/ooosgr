<script setup lang="ts">
import type { TrubybuDto } from '~/types/trubybu'

const { data: trubybu } = await useContentFetch<TrubybuDto>('truby-b-u', {
  method: 'GET'
})

const template = ref('')

useServerSeoMeta({
  ogTitle: () => trubybu.value!.data.seo.title,
  title: () => trubybu.value!.data.seo.title,
  description: () => trubybu.value!.data.seo.description,
  ogDescription: () => trubybu.value!.data.seo.description,
  keywords: () => trubybu.value!.data.seo.keywords
})

const data = ref({
  slider: [
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      title: '219х9',
      rel: 'gallery_5_slider',
    },
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      title: '1',
      rel: 'gallery_5_slider',
    },
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      title: '219х9',
      rel: '2014-12-23 09',
    }
  ],
  showMenu: true,
  itemsHead: [
    'Диаметр',
    'Описание',
    'Цена',
    'Фото'
  ]
})
</script>

<template>
  <CategorySliderMobile />
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

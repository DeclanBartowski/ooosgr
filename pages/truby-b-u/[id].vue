<script setup lang="ts">
import type { TrubybuDto } from '~/types/trubybu'

const route = useRoute()
const id = computed(() => route.path.split('/').pop())

const { data: trubybuid } = await useContentFetch<TrubybuDto>(`truby-b-u/${id.value}`, {
  method: 'GET'
})

const template = ref('')

useServerSeoMeta({
  ogTitle: () => trubybuid.value!.data.seo.title,
  title: () => trubybuid.value!.data.seo.title,
  description: () => trubybuid.value!.data.seo.description,
  ogDescription: () => trubybuid.value!.data.seo.description,
  keywords: () => trubybuid.value!.data.seo.keywords
})

const data = ref({
  slider: [
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/47/88b08f5e2f500a2c1918bb55109c5e56ae13961e.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/pipe/photos/47/88b08f5e2f500a2c1918bb55109c5e56ae13961e.jpeg',
      title: 'IMG-20221115-WA0012',
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
          v-if="trubybuid"
          :data="trubybuid?.data"
        />
        <Category
          v-if="trubybuid"
          :content="trubybuid?.data"
          :category="trubybuid?.data.info"
          :template
          :data
        />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped></style>

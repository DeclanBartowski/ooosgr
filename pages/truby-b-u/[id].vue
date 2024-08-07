<script setup lang="ts">
import type { TrubybuDto } from '~/types/trubybu'

const route = useRoute()
const id = computed(() => route.path.split('/').pop())

const { data: trubybuid } = await useContentFetch<TrubybuDto>(`truby-b-u/${id.value}`, {
  method: 'GET'
})

const template = ref('')

useSeoMeta({
  ogTitle: () => trubybuid.value!.data.seo.title,
  title: () => trubybuid.value!.data.seo.title,
  description: () => trubybuid.value!.data.seo.description,
  ogDescription: () => trubybuid.value!.data.seo.description,
  keywords: () => trubybuid.value!.data.seo.keywords
})

const data = ref({
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
  <CategorySliderMobile v-if="trubybuid.data && trubybuid.data.slider && trubybuid.data.slider.length > 0" :items="trubybuid.data.slider" />
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
          :data="trubybuid.data"
        />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped></style>

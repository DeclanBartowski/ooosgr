<script setup lang="ts">
import type { PromosDto } from '~/types/promos'

const page = ref({
  title: 'Акции нашей компании ',
})

const { $api } = useNuxtApp()

const pages = ref(1)

const { data: promos } = await useAsyncData<PromosDto>(
  'promos',
  (): Promise<PromosDto> => $api('promos', {
    method: 'GET',
    params: {
      page: pages.value
    }
  }), {
  watch: [pages]
})

useServerSeoMeta({
  ogTitle: () => promos.value!.data.seo.title,
  title: () => promos.value!.data.seo.title,
  description: () => promos.value!.data.seo.description,
  ogDescription: () => promos.value!.data.seo.description,
  keywords: () => promos.value!.data.seo.keywords
})
</script>

<template>
  <div class="wrap content category promo">
    <div class="wrap_cont">
      <div class="past-deals">
        <h1 v-if="promos">
          {{ promos.data.title }}
        </h1>
        <PromoList
          v-if="promos"
          :data="promos.data.items"
        />
        <Pagination v-if="promos" />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<script setup lang="ts">
import type { ProcurementDto } from '~/types/procurement'

  const { data: procurement } = await useContentFetch<ProcurementDto>('procurement', {
  method: 'GET'
})

useSeoMeta({
  ogTitle: () => procurement.value!.data.seo.title,
  title: () => procurement.value!.data.seo.title,
  description: () => procurement.value!.data.seo.description,
  ogDescription: () => procurement.value!.data.seo.description,
  keywords: () => procurement.value!.data.seo.keywords
})

const config = useRuntimeConfig()
</script>

<template>
  <div class="wrap content page common page--procurement">
    <div class="wrap_cont">
      <h1 v-if="procurement">
        {{ procurement.data.info.name }}
      </h1>
      <div class="text">
        <div class="content pipes zakupki-cont">
          <ul class="category_list">
            <li style="list-style: none;">
              <div
                v-if="procurement"
                class="desc block-shadow block-shadow-mobile-off"
              >
                <h1>{{ procurement.data.info.name }}</h1>
                <div
                  class="text"
                  v-html="procurement.data.info.preview_text"
                />
              </div>
              <div
                v-if="procurement"
                class="img block-shadow"
              >
                <img
                  :alt="procurement.data.info.preview_picture.alt"
                  :src="`${config.public.baseURL}${procurement.data.info.preview_picture.src}`"
                >
              </div>
            </li>
          </ul>
        </div>
        <ProcurementList v-if="procurement" :data="procurement.data" />
      </div>
    </div>
    <BitrixForm />
    <div class="push" />
  </div>
</template>

<style scoped>
.content.pipes .category_list li .desc {
  padding: 20px 50px 34px 50px;
}
.zakupki-cont {
  margin-bottom: 35px;
}
.content h2 {
  margin-bottom: 35px;
}
</style>

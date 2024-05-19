<script setup lang="ts">
import type { BusDto } from '~/types/bus'

const template = ref('vus')

const { data: bus } = await useContentFetch<BusDto>('bus', {
  method: 'GET'
})

useSeoMeta({
  ogTitle: () => bus.value!.data.seo.title,
  title: () => bus.value!.data.seo.title,
  description: () => bus.value!.data.seo.description,
  ogDescription: () => bus.value!.data.seo.description,
  keywords: () => bus.value!.data.seo.keywords
})
</script>

<template>
  <div class="wrap content page isolation page--truby-stalnye-v-vus-izolyaczii">
    <div class="wrap_cont">
      <div class="two columns columns--adaptive">
        <Sidebar
          v-if="bus"
          :wrapper-class="'archetype archetype--1280p'"
          :data="bus.data"
        />
        <Category
          v-if="bus"
          :template
          :category="bus.data.info"
          :data="bus.data"
        />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<script setup lang="ts">
import type { BalksDto } from '~/types/balks'

const template = ref('balks')

const { data: balks } = await useContentFetch<BalksDto>('balks', {
  method: 'GET'
})
console.log(balks.value)

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
